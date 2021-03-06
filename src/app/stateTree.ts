import { combineReducers } from 'redux'
import { routerReducer, RouterState } from 'react-router-redux'

import routes from 'routes'
import App from 'app/App.reducer'
import Zen from 'routes/Zen/Zen.reducer'
import Zen2 from 'routes/Zen2/Zen2.reducer'
import Home from 'routes/Home/Home.reducer'
import routerAumentation from 'routes/router.reducer'

// The state tree mirrors our routing structure. This is an important part of
// the pattern we are using. Application scoped state is stored in the 'app'
// branch. This is where you will store any part of the store state that you
// want to persist across route changes.

// Every route branch of the state tree will have a 'route' prop that
// corresponds to that routes reducer. This is where you should store any
// route scoped state.

// Redux connected component state is nested in the route branches.
// Said differently, each route branch will contain a reducer for any redux
// connected components used on the route.

// When you load the application for the first time or change route, a
// LOCATION_CHANGE action is fired by redux-router with the target route as
// the payload. This information is used to identify and active to correct
// branch of the state tree.

// Using redux's replaceReducer utility, the route state is spread along side
// the app state on location change. Ensuring that you are only ever working
// with and updating the state that is in scope.

// The result of this is an application state that is very clean. It only ever
// has the information that you are using, and it only runs the reducers for
// that info. Selectors are much more portable, and the state is
// structured in a tierd approach that allows for great flexibility.

const branches = {
  [routes.home]: {
    route: Home
  },
  [routes.zen()]: {
    route: Zen
  },
  [routes.zen2()]: {
    route: Zen2
  }
}

const appState = {
  app: App,
  router: (state: RouterState, action: Action) => {
    const initialState: OpenObject = routerReducer(state, action)
    return routerAumentation(initialState, action)
  }
}

const reducer = combineReducers(appState)

export const pruneStateTree = (route: string) => {
  return combineReducers({
    ...appState,
    ...branches[route]
  })
}

export default reducer
