import * as triggers from 'actions/triggers'
import * as updaters from 'actions/updaters'
import { replaceReducer } from 'app/store'
import { put, takeLatest, all } from 'redux-saga/effects'
import appReducer, { pruneStateTree } from 'app/stateTree'

// ------------------------------------
// Watcher Sagas
// ------------------------------------

function* watchLocationChange() {
  yield takeLatest(
    triggers.LOCATION_CHANGE,
    pruneStateTreeWorker
  )
}

function* watchEmitters() {
  yield takeLatest(
    triggers.EMIT_APP_INIT,
    yield (action: Action) => all([]))
}

function* watchUserActions() {
  yield takeLatest(
    triggers.CLICK_INCREMENT_BUTTON,
    yield (action: Action) => all([
      put(updaters.updateCounter({ action }))
    ])
  )
}

// ------------------------------------
// Worker Sagas
// ------------------------------------

function* apllicationInit() {
  yield put(triggers.emitAppInit())
}

function* pruneStateTreeWorker(action: Action) {
  yield replaceReducer(appReducer)
  yield replaceReducer(pruneStateTree(action.payload.pathname))
}

// -----------------------------------------------------------------------------
// The root saga is provided to the createSagaMiddleware to start all sagas
// -----------------------------------------------------------------------------

export default function* rootSaga() {
  yield all([
    watchEmitters(),
    apllicationInit(),
    watchLocationChange(),
    watchUserActions()
  ])
}
