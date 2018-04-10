import * as React from 'react'
import {
  Route,
  Redirect,
  RouteProps
} from 'react-router-dom'

// Make sure to add the trailing '/' to the route bases here.
// The param portion of the string will be defined as part of a
// string literal in the route

const routes = {
  home: '/',
  zen: '/zen/'
}

// Use the Page component for any routes that do not have parameters.
// It will enforce the trailing slash needed for self pruning state tree
// to work.

const Page = (props: RouteProps) => (
  <Route
    path={props.path}
    exact={true}
    render={renderProps => renderProps.location.pathname.slice(-1) === '/' ?
      <Route {...renderProps} component={props.component} /> :
      <Redirect to={routes.zen} />
    }
  />
)

export default routes

export const Routes = () => {
  return (
    <div>
      <Page path={routes.home} component={require('./Home').default} />
      <Page path={routes.zen} component={require('./Zen').default} />
    </div>
  )
}
