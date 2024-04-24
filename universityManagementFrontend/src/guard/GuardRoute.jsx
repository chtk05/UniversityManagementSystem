import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useUserData from "../hooks/useUserData";

const GuardedRoute = ({ isRouteAccessible, allowedRoles, redirectRoute }) => {
  const { userDetails } = useUserData();

  const role = userDetails && userDetails.role;

  if (!isRouteAccessible || !allowedRoles.includes(role)) {
    return <Navigate to={redirectRoute} replace />;
  }

  return <Outlet />;
};

export default GuardedRoute;
