import * as updaters from 'actions/updaters'

const initialState = {
  zen: ''
}

export default (state: any = initialState, action: Action) => {
  switch (action.type) {
    case updaters.UPDATE_COUNTER:
      return {
        ...state,
        counter: action.payload,
      }

    default:
      return state
  }
}
