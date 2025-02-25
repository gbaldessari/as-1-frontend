import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const usertoken = Cookies.get('token');
  if (usertoken === undefined) {
    return <Navigate to="/Home" replace />;
  }
  return children;
};

export default ProtectedRoute;
