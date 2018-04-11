import * as triggers from 'actions/triggers'
import * as updaters from 'actions/updaters'
import { replaceReducer } from 'app/store'
import { pruneStateTree } from 'app/stateTree'
import { put, takeLatest, all } from 'redux-saga/effects'
import { genRouterAdditions } from 'services/redux-action-context'

// ------------------------------------
// Watcher Sagas
// ------------------------------------

function* watchLocationChange() {
  yield takeLatest(
    triggers.LOCATION_CHANGE,
    function* (action: Action) {
      const routerAdditions = yield genRouterAdditions(action)
      yield pruneStateTreeWorker(routerAdditions, action)
      yield augmentRouterState(routerAdditions, action)
    }
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

function* augmentRouterState(routerAdditions: any, action: Action) {
  yield put(updaters.augmentRouterState({ payload: routerAdditions, action }))
}

function* pruneStateTreeWorker(routerAdditions: any, action: Action) {
  yield replaceReducer(pruneStateTree(routerAdditions.route))
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
