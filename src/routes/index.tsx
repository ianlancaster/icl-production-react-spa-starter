
import * as React from 'react'
import { Route } from 'react-router-dom'

const routes = {
  home: '/',
  zen: '/zen'
}

export default routes

export const Routes = () => {
  return (
    <div>
      <Route
        exact={true}
        path={routes.home}
        component={require('./Home').default}
      />
    </div>
  )
}
