const updaters = {
  UPDATE_COUNTER: 'UPDATE_COUNTER'
}

export default updaters

export const UPDATE_COUNTER = (action: any) => ({
  type: updaters.UPDATE_COUNTER,
  payload: action.payload
})
