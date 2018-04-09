export const UPDATE_COUNTER = 'UPDATE_COUNTER'

export const updateCounter: ActionCreator =
(payload: number, action: Action) => ({
  type: UPDATE_COUNTER,
  payload: action.payload
})
