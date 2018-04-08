import { call, put, takeLatest, throttle, all, select } from 'redux-saga/effects'
import triggers from 'actions/triggers';
import { UPDATE_COUNTER } from 'actions/updaters';


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

function* watchUserActions() {
  yield takeLatest(triggers.CLICK_INCREMENT_BUTTON,
    yield action => all([
      updateCounter(action)
    ])
  )
}

// ------------------------------------
// Worker Sagas
// ------------------------------------

function* apllicationInit() {
  yield put({ type: 'EMIT_APP_INIT' })
}

function* updateCounter(action) {
  console.log('action : in worker saga : ', action)
  yield put(UPDATE_COUNTER(action))
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
