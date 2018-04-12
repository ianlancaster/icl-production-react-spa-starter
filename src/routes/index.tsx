import * as React from 'react'
import { Route, Dir, newRoute } from 'services/better-routes'

// Make sure to add the trailing '/' to the route bases here.
const routes = {
  home: '/',
  zen: newRoute('/zen/', 'zenParam'),
  zen2: newRoute('/zen2/', 'zenParam')
}

export const Routes = () => {
  return (
    <div>
      <Dir path={routes.home} component={require('./Home').default} />
      <Route path={routes.zen()} component={require('./Zen').default} />
      <Route path={routes.zen2()} component={require('./Zen2').default} />
    </div>
  )
}

export default routes
