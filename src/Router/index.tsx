import React from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'

interface RouteComponentProps {
  routes: Routes
}
type Routes = Array<RouteConfig>
export type PropsWithRoutes<P> = P & { routes: Routes }
interface RouteConfig {
  path: string
  component: React.ComponentType<PropsWithRoutes<{}>> | React.ComponentType<any>
  routes?: Routes
}
const Router: React.FC<RouteComponentProps> = (props) => {
  return (
    <HashRouter>
      <Switch>
        {props.routes.map((route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))}
      </Switch>
    </HashRouter>
  )
}

function RouteWithSubRoutes(route: RouteConfig) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        <route.component {...props} routes={route.routes as Routes} />
      )}
    />
  )
}

export default Router
