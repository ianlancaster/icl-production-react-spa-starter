import * as updaters from 'actions/updaters'
import { StoreState } from 'types'

const initialState = {
  counter: 0
}

export default (state: StoreState = initialState, action: Action) => {
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
