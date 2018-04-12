import checkContext from './checkContext'

export default (actionType: string, context?: OpenObject) => (action: Action) =>
  (actionType === checkContext(action, context))