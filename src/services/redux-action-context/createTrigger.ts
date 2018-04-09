interface Trigger {
  ({ payload, context }: {
    payload?: any,
    context?: object
  }): Action
}

const createTrigger = (type: string): Trigger =>
({ payload, context }: ActionDetails = {}) => {
  let action: Action = { type }
  if (payload) action = { ...action, payload }
  if (context) action = { ...action, context }
  return action
}

export default createTrigger