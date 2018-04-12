interface UpdaterArgs extends Action {
  action: Action
}

interface Updater {
  ({ payload, action, context }: {
    action: Action,
    payload?: any,
    context?: object
  }): Action
}

export default (type: string): Updater =>
  ({ action, payload, context }: UpdaterArgs): Action => ({
    type,
    payload: payload || action.payload,
    context: context || action.context,
    trigger: action
  })
