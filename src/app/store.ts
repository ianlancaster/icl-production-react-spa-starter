import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'sagas'
import createHistory from 'history/createBrowserHistory'
import stateTree from './stateTree'

export const history = createHistory()
const sagaMiddleware = createSagaMiddleware()

const initialState = {}

const enhancers = []
const middleware = [
  sagaMiddleware
]

declare global {
  interface Window {
    devToolsExtension: Function
  }
}

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension // tslint:disable-line

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  stateTree,
  initialState,
  composedEnhancers
)

sagaMiddleware.run(rootSaga)
export const dispatch = store.dispatch
export const getState = store.getState
export const replaceReducer = store.replaceReducer
export default store
