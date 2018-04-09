import * as triggers from 'actions/triggers'
import * as updaters from 'actions/updaters'
import routes from 'routes'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()
import {
  put,
  takeLatest,
  all,
  call,
  fork
} from 'redux-saga/effects'

const router = require('redux-saga-router').router

const sagaRoutes = {
  [routes.home]: function* homeSaga() {
    console.log('ping')
    yield put({ type: 'HIT_HOME_ROUTE'})
  },
  [routes.zen]: function* zenSaga() {
    console.log('ping')
    const zen = yield call(fetch, 'https://api.github.com/zen')
    yield put({
      type: 'RECIEVE_ZEN',
      payload: zen
    })
  }
}

// ------------------------------------
// Watcher Sagas
// ------------------------------------
// function* watchLocationChange() {
//   console.log('ping')
//   yield fork(router, history, sagaRoutes)
// }

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
  
  yield fork(router, history, sagaRoutes)
}
