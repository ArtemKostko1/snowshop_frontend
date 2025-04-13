import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../../../components/.layout/header/Header";
import { useAuth } from "../../../store/hooks/auth/useAuth";
import { Container } from "@mui/material";
import { useAppSelector } from "../../../store/hooks/app";

const PrivateRoute: React.FC = () => {
  const isAuth = useAuth();
  const user = useAppSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuth || !user?.role) return;

    const role = user.role.toUpperCase();

    if (location.pathname === "/") {
      if (role === "ADMIN") navigate("/admin/goods");
    }
  }, [isAuth, user, location, navigate]);

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
      <Navigate to="/login" />
    )
  );
};

export default PrivateRoute;
