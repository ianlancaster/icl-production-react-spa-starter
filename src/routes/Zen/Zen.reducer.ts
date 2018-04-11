import * as updaters from 'actions/updaters'
import routes from 'routes'
import { createContext } from 'services/redux-action-context'

const initialState = {
  zen: ''
}

export default (state: any = initialState, action: Action) => {
  const checkRouteContext = createContext({ route: routes.zen() })

  switch (checkRouteContext(action)) {
    case updaters.UPDATE_COUNTER:
      return {
        ...state,
        counter: action.payload,
      }

    default:
      return state
  }
}
