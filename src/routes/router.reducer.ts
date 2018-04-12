import * as updaters from 'actions/updaters'

const initialState = {
  location: {}
}

export default (state: OpenObject = initialState, action: Action) => {
  switch (action.type) {
    case updaters.AUGMENT_ROUTER_STATE:
      return {
        ...state.location,
        ...action.payload
      }

    default:
      return state
  }
}
