import * as updaters from 'actions/updaters'

const initialState = {
  counter: 0
}

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case updaters.SET_COUNTER:
      return {
        ...state,
        counter: action.payload,
      }

    default:
      return state
  }
}
