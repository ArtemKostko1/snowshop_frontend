import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks/app";

interface RoleBasedRouteProps {
  allowedRoles: string[];
  children: JSX.Element;
}

const RoleBasedRoute: React.FC<RoleBasedRouteProps> = ({ allowedRoles, children }) => {
	const userRole = useAppSelector((state) => state.auth.user.role);

  if (!userRole || !allowedRoles.includes(userRole.toUpperCase())) {
    return <Navigate to="/" />;
  }

  return children;
};

export default RoleBasedRoute;