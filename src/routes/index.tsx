import * as React from 'react'
import {
  Route as BaseRoute,
  Redirect,
  RouteProps
} from 'react-router-dom'

// Make sure to add the trailing '/' to the route bases here.
// The param portion of the string will be defined as part of a
// string literal in the route

const routes = {
  home: '/',
  zen: '/zen/:param'
}

// Use the Dir component for any routes that do not have parameters.
// It will enforce the trailing slash needed for self pruning state tree
// to work.

const Dir = (props: RouteProps) => (
  <BaseRoute
    path={props.path}
    exact={true}
    render={renderProps => renderProps.location.pathname.slice(-1) === '/' ?
      <BaseRoute {...renderProps} component={props.component} /> :
      <Redirect to={routes.zen} />
    }
  />
)

const Route = (props: RouteProps) => (
  <BaseRoute
    path={props.path}
    exact={true}
    render={renderProps => renderProps.location.pathname.slice(-1) === '/' ?
    <Redirect to={renderProps.location.pathname.slice(0, -1)} /> :
    <BaseRoute {...renderProps} component={props.component} />
    }
  />
)

export default routes

export const Routes = () => {
  return (
    <div>
      <Dir path={routes.home} component={require('./Home').default} />
      <Route path={`${routes.zen}:param`} component={require('./Zen').default} />
    </div>
  )
}
