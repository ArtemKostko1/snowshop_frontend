import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../../../components/.layout/header/Header";
import { useAuth } from "../../../store/hooks/auth/useAuth";
import { Container } from "@mui/material";

const PrivateRoute: React.FC = () => {
  const isAuth = useAuth();
  return (
    // Если пользователь авторизован, отобразить Header и Outlet, иначе перенаправить на страницу авторизации
    isAuth ? (
      <>
        <Header />
        <Container>
          <Outlet />
        </Container>
      </>
    ) : (
      <Navigate to="login" />
    )
  );
};

export default PrivateRoute;
