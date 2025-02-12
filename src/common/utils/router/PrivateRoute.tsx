import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute: React.FC = () => {
  const isAuth = true;
  return (
    // Если пользователь авторизован перейти на указанную страницу, иначе перенаправить на страницу авторизации
    isAuth ? <Outlet /> : <Navigate to="login" />
  );
};

export default PrivateRoute;
