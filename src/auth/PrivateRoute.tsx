import { Redirect, Route, RouteProps } from "react-router-dom"
import { Role, useAuth } from "./store"
interface PrivateRouteProps extends RouteProps {
  children: React.ReactNode
  appRole: Role
}
export const PrivateRoute = ({
  children,
  appRole,
  ...rest
}: PrivateRouteProps) => {
  const auth = useAuth()

  return (
    <Route {...rest}>
      {auth.role === appRole ? children : <Redirect to="/login" />}
    </Route>
  )
}
