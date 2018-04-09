import * as triggers from 'actions/triggers'
import * as updaters from 'actions/updaters'
import { put, takeLatest, all } from 'redux-saga/effects'

// ------------------------------------
// Watcher Sagas
// ------------------------------------

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

// -----------------------------------------------------------------------------
// The root saga is provided to the createSagaMiddleware to start all sagas
// -----------------------------------------------------------------------------

export default function* rootSaga() {
  yield all([
    watchEmitters(),
    apllicationInit(),
    watchUserActions()
  ])
}
