import routes from 'routes'
import * as updaters from 'actions/updaters'
import { createContext } from 'services/redux-action-context'

const initialState = {
  zen: `Don't pet the sweaty things`
}

export default (state = initialState, action: Action) => {
  const checkRouteContext = createContext({ route: routes.zen2() })

  switch (checkRouteContext(action)) {
    case updaters.SET_COUNTER:
      return {
        ...state,
        counter: action.payload,
      }

    case updaters.SET_ZEN:
      return {
        ...state,
        zen: action.payload
      }

    default:
      return state
  }
}
