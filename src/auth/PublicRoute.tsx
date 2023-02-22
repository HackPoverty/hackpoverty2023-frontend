import { Redirect, Route, RouteProps } from "react-router-dom"
import { useAuth } from "./store"

export const PublicRoute = ({ children, ...rest }: PublicRouteProps) => {
  const auth = useAuth()

  return (
    <Route {...rest}>
      {auth.role === undefined ? (
        children
      ) : auth.role === "FARMER" ? (
        <Redirect to="/dashboard" />
      ) : (
        <Redirect to="/farmers" />
      )}
    </Route>
  )
}
interface PublicRouteProps extends RouteProps {
  children: React.ReactNode
}
