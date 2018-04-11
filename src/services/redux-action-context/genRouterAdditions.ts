import routes from 'routes'
import { matchPath } from 'react-router'

const genRouterAdditions = (action: Action) => {
  let res
  const routeNames = Object.keys(routes)
  for (let i = 0; i < routeNames.length; i++) {
    const route = routeNames[i]
    let path: any = routes[route]
    if (typeof path === 'function' && !(path instanceof Array)) {
      path = path()
    }
    const pathname = action.payload.pathname
    if (!!matchPath(pathname, { path, exact: true })) {
      res = { routeName: route, route: path }
      if (pathname.slice(-1) !== '/') {
        const pathParts = pathname.split('/')
        res = {
          ...res,
          param: pathParts[pathParts.length - 1]
        }
      }
      break
    }
  }
  return res
}

export default genRouterAdditions
