import { Redirect, Route, RouteProps } from 'react-router-dom';
import { Role, useAuth } from './store';
interface PrivateRouteProps extends RouteProps {
  children: React.ReactNode,
  role: Role

}
export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, role, ...rest }) => {
  const auth = useAuth();

  return (
    <Route {...rest} >
      {auth.role === role ? (
        children
      ) : (
        <Redirect to='/login' />
      )}
    </Route>
  );
};