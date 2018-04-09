import { createTrigger } from 'services/redux-action-context'

export const CLICK_INCREMENT_BUTTON = 'CLICK_INCREMENT_BUTTON'
export const clickIncrementButton =
createTrigger(CLICK_INCREMENT_BUTTON)

export const EMIT_APP_INIT = 'EMIT_APP_INIT'
export const emitAppInit: ActionCreator =
createTrigger(EMIT_APP_INIT)