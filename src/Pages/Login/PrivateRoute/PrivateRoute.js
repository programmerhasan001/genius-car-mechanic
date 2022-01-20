import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { users, isLoading } = useAuth();
  if (isLoading) {
    return <Spinner animation="border" variant="success" />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        users.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
