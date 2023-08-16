import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ element: Element, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          <Element />
        ) : (
          <Navigate to="/Login" state={{ from: location }} />
        )
      }
    />
  );
}

export default PrivateRoute;
