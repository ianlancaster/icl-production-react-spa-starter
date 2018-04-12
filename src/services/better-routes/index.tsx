import * as React from 'react'
import { Route as BaseRoute, Redirect, RouteProps } from 'react-router-dom'

/**
 * Use to create a function that will return the defined router path
 * if called without any params, and returns an instance of that route
 * when a param is passed in. If you need to store more than one param
 * in the URL, consider useing search parameters.
 */
export const newRoute = (path: string, paramName: string) => (param?: string): string =>
  param ? `${path}${param}` : `${path}:${paramName}`

/**
 * Use the Dir component for any routes that do not have parameters.
 * It will enforce the trailing slash needed for self pruning state tree to work.
 */
export const Dir = (props: RouteProps) => (
  <BaseRoute
    path={props.path}
    exact={true}
    render={renderProps => renderProps.location.pathname.slice(-1) === '/' ?
      <BaseRoute {...renderProps} component={props.component} /> :
      <Redirect to={renderProps.location.pathname + '/'} />
    }
  />
)

/**
 * Our version of a Route will only be used to define routes that take in
 * a URL parameter. It will enforce the removal of a trailing slash (unlike 
 * the Dir component which enforces it).
 */
export const Route = (props: RouteProps) => (
  <BaseRoute
    path={props.path}
    exact={true}
    render={renderProps => renderProps.location.pathname.slice(-1) === '/' ?
    <Redirect to={renderProps.location.pathname.slice(0, -1)} /> :
    <BaseRoute {...renderProps} component={props.component} />
    }
  />
)
