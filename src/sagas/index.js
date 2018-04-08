import { call, put, takeLatest, throttle, all, select } from 'redux-saga/effects'


// ------------------------------------
// Watcher Sagas
// ------------------------------------

function* watchLocationChange() {
  yield takeLatest('LOCATION_CHANGE',
    yield action => all([])
  )
}

function* watchEmitters() {
  yield takeLatest('EMIT_APP_INIT', yield action => all([]))
}

// ------------------------------------
// Worker Sagas
// ------------------------------------

function* apllicationInit() {
  yield put({ type: 'EMIT_APP_INIT' })
}

// -----------------------------------------------------------------------------
// The root saga is provided to the createSagaMiddleware to start all sagas
// -----------------------------------------------------------------------------

export default function* rootSaga() {
  yield all([
    watchEmitters(),
    apllicationInit()
  ])
}
