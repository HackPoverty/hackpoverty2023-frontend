import { Redirect, Route } from "react-router-dom"
import type { RouteProps } from "react-router-dom"
import { useAuth } from "."

export const PublicRoute = ({ component: Component, ...rest }: RouteProps) => {
  const auth = useAuth()

  if (Component === undefined) return null

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.user?.role === undefined ? (
          <Component {...props} />
        ) : auth.user?.role === "FARMER" ? (
          <Redirect to="/farmer-dashboard" />
        ) : (
          <Redirect to="/farmers" />
        )
      }
    />
  )
}
