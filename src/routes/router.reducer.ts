import * as updaters from 'actions/updaters'

export default (state: any, action: Action) => {
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
