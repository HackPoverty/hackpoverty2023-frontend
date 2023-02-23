import { Redirect, Route, RouteProps } from 'react-router-dom'
import { useAuth } from '.'

export const PublicRoute = ({ children, ...rest }: PublicRouteProps) => {
  const auth = useAuth()

  return (
    <Route {...rest} >
      {auth.user?.role === undefined ? (
        children
      ) : auth.user?.role === "FARMER" ? (
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
