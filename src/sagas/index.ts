import routes from 'routes'
import * as triggers from 'actions/triggers'
import * as updaters from 'actions/updaters'
import { replaceReducer } from 'app/store'
import { pruneStateTree } from 'app/stateTree'
import { put, takeLatest, all, call } from 'redux-saga/effects'
import { genRouterAdditions, RouterAdditions, context } from 'services/redux-action-context'

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
    yield (action: Action) => put(updaters.setCounter({ action }))
  )

  yield takeLatest(
    context(triggers.CLICK_BUTTON, {
      route: routes.zen(),
      name: 'fetch zen'
    }),
    yield (action: Action) => fetchZen(action)
  )
}

// ------------------------------------
// Worker Sagas
// ------------------------------------

function* apllicationInit() {
  yield put(triggers.emitAppInit())
}

function* augmentRouterState(routerAdditions: RouterAdditions, action: Action) {
  yield put(updaters.augmentRouterState({ payload: routerAdditions, action }))
}

function* pruneStateTreeWorker(routerAdditions: RouterAdditions, action: Action) {
  yield replaceReducer(pruneStateTree(routerAdditions.route))
}

function* fetchZen(action: Action) {
  yield put(updaters.setFetching({ payload: true, action }))
  const res = yield call(fetch, 'http://api.github.com/zen')
  const zen = yield res.text()
  yield put(updaters.setZen({ payload: zen, action, context: { route: routes.zen() }}))
  yield put(updaters.setFetching({ payload: false, action }))
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
