import { Redirect, Route } from "react-router-dom"
import type { RouteProps } from "react-router-dom"
import { Role, useAuth } from "."
interface PrivateRouteProps extends RouteProps {
  appRole: Role
}
export const PrivateRoute = ({
  appRole,
  component: Component,
  ...rest
}: PrivateRouteProps) => {
  const auth = useAuth()

  if (Component === undefined) return null

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.user?.role === appRole ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}
