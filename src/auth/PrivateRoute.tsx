import { Redirect, Route, RouteProps } from 'react-router-dom';
import { Role, useAuth } from '.';
interface PrivateRouteProps extends RouteProps {
  children: React.ReactNode,
  role: Role

}
export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, role, ...rest }) => {
  const auth = useAuth();

  return (
    <Route {...rest} >
      {auth.user?.role === role ? (
        children
      ) : (
        <Redirect to='/login' />
      )}
    </Route>
  );
};