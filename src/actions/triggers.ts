const triggers = {
  CLICK_INCREMENT_BUTTON: 'CLICK_INCREMENT_BUTTON'
}

export default triggers

export const CLICK_INCREMENT_BUTTON = (payload: number) => ({
  type: triggers.CLICK_INCREMENT_BUTTON,
  payload
})
