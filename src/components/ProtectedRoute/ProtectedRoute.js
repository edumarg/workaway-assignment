/* eslint-disable react/prop-types */
import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = (props) => {
  const {
    path,
    component: Component,
    render,
    user,
    onLogout,
    onUpdate,
    ...rest
  } = props;
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        if (!user)
          return (
            <Redirect
              to={{
                pathname: "/welcome",
                state: { from: props.location },
              }}
            />
          );
        return Component ? (
          <Component
            onLogout={() => onLogout()}
            onUpdate={(user) => onUpdate(user)}
            {...props}
          />
        ) : (
          render(props)
        );
      }}
    />
  );
};

export default ProtectedRoute;
