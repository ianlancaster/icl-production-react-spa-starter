import routes from 'routes'
import { matchPath } from 'react-router'
import { RouterAdditions } from './'

const genRouterAdditions = (action: Action): RouterAdditions => {
  let res = { route: '', routeName: '', path: '', param: '' }
  const routeNames = Object.keys(routes)
  for (let i = 0; i < routeNames.length; i++) {
    const route = routeNames[i]
    const recievedPath: string|Function = routes[route]
    const path: string = (typeof recievedPath === 'function' && !(recievedPath instanceof Array))
      ? recievedPath() : recievedPath
    const pathname = action.payload.pathname
    if (!!matchPath(pathname, { path, exact: true })) {
      res = { ...res, routeName: route, route: path }
      if (pathname.slice(-1) !== '/') {
        const pathParts: string[] = pathname.split('/')
        res = {
          ...res,
          param: pathParts[pathParts.length - 1] || ''
        }
      }
      break
    }
  }
  return res
}

export default genRouterAdditions
