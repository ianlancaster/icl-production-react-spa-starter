// TODO: add support for 'or', exclude, and regex in context

const checkContext = (action: Action, context: any) => {
  if (!context || !Object.keys(context).length) return action.type
  if (!action.context || !Object.keys(action.context).length) return
  const contextKeys = Object.keys(context)
  for (let i = 0; i < contextKeys.length; i++) {
    if (context[contextKeys[i]] !== action.context[contextKeys[i]]) return
  }
  return action.type
}

export default checkContext
