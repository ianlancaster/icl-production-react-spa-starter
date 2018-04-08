import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware, compose } from 'redux'

import rootSaga from 'sagas'
import stateTree from './stateTree'
import { StoreState } from 'types'

export const history = createHistory()
const sagaMiddleware = createSagaMiddleware()

const enhancers = []
const middleware = [
  sagaMiddleware
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore<StoreState, any, any>(
  stateTree,
  composedEnhancers
)

sagaMiddleware.run(rootSaga)
export const dispatch = store.dispatch
export const getState = store.getState
export const replaceReducer = store.replaceReducer
export default store
