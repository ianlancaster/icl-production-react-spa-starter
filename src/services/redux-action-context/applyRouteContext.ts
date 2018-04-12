const applyRouteContext: any = (currentStore: any) =>
(next: Function) => (action: any) => {
  const state = currentStore.getState()
  let nextAction = action
  if (state.router && state.router.route) {
    nextAction = {
      ...action,
      context: {
        route: state.router.route,
        ...action.context
      }
    }
  }
  next(nextAction)
}

export default applyRouteContext
