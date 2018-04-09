export const CLICK_INCREMENT_BUTTON = 'CLICK_INCREMENT_BUTTON'
export const EMIT_APP_INIT = 'EMIT_APP_INIT'

export const clickIncrementButton: ActionCreator = (payload: number) => ({
  type: CLICK_INCREMENT_BUTTON,
  payload
})

export const emitAppInit: ActionCreator = () => ({
  type: EMIT_APP_INIT
})