// import { combineReducers } from 'redux'
// import { routerReducer } from 'react-router-redux'
// import routes from 'routes'
// import { extractRoute } from 'services/redux-action-context'
// import app from 'app/app.reducer'
// import routerAumentation from 'routes/router.reducer'
// import Inventory from 'routes/Inventory/Inventory.reducer'
// import FacetedSearch from 'components/FacetedSearch/FacetedSearch.reducer'
// import Error from 'components/Error/Error.reducer'

// // The state tree mirrors our routing structure. This is an important part of
// // the pattern we are using. Application scoped state is stored in the 'app'
// // branch. Redux connected component state is nested withing the rout branches.

// // Your route state will be spread with the app state on location change
// // ensuring that you are only ever working with and updating the state
// // that is in scope.

// // If a route uses the same redux connected component, make sure to use a
// // reducer creator that takes in a route parameter to change the context of
// // actions it subscribes to. The mapStateToProps function in this component's
// // container will also need to be route aware to access the correct state entry

// const stateTree = {
//   [routes['/inventory/']]: {
//     route: Inventory,
//     FacetedSearch,
//     Error
//   }
// }

// const appState = {
//   router: (state, action) => {
//     const initialState = routerReducer(state, action)
//     return routerAumentation(initialState, action)
//   },
//   app
// }

// const reducer = combineReducers(appState)

// export const pruneStateTree = pathname => {
//   const { route } = extractRoute(pathname)
//   return combineReducers({
//     ...appState,
//     ...stateTree[route]
//   })
// }

// export default reducer

import { StoreState } from 'types'
import updaters from 'actions/updaters'

const initialState = {
  counter: 0
}

interface Action {
  type: String,
  payload: any
}

export default (state: StoreState = initialState, action: Action) => {
  switch (action.type) {
    case updaters.UPDATE_COUNTER:
      console.log('action.payload :  : ', action.payload)
      return {
        ...state,
        counter: action.payload,
      }

    default:
      return state
  }
}
