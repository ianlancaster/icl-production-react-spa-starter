import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import rootSaga from 'sagas'
import stateTree from './stateTree'
import { applyRouteContext } from 'services/redux-action-context'

const sagaMiddleware = createSagaMiddleware()
export const history = createHistory()

const middleware = [
  applyRouteContext,
  sagaMiddleware,
  routerMiddleware(history)
]

const enhancers = []

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

const store = createStore<any>(
  stateTree,
  composedEnhancers,
)

sagaMiddleware.run(rootSaga)
export const dispatch = store.dispatch
export const getState = store.getState
export const replaceReducer = store.replaceReducer
export default store
