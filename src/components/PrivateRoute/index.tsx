import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  element: ReactElement; 
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/" />;
};

export default PrivateRoute;
