interface RouteParts {
  route: string,
  param?: string
}

export default (pathname: string): RouteParts => {
  const pathParts = pathname.split('/')
  const param = pathParts[pathParts.length - 1]
  const route = pathParts.slice(0, pathParts.length - 1).join('/') + '/'
  return { route, param }
}
