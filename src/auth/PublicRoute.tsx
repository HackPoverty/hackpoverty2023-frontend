import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from './store';
interface PrivateRouteProps extends RouteProps {
  children: React.ReactNode,

}
export const PublicRoute: React.FC<PrivateRouteProps> = ({ children, ...rest }) => {
  const auth = useAuth();

  return (
    <Route {...rest} >
      {auth.role === undefined ? (
        children
      ) : auth.role === "FARMER" ? (
        <Redirect to="/dashboard" />
      ) : <Redirect to="/farmers" />}
    </Route>
  );
};