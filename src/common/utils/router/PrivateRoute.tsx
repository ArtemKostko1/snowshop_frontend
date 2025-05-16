import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../../../components/_layout/header/Header";
import { useAuth } from "../../../store/hooks/auth/useAuth";
import { useAppSelector } from "../../../store/hooks/app";
import { useStyles } from "../../../components/_layout/main/Layout.styles";
import AdminHeader from "../../../components/_layout/header/AdminHeader";

const PrivateRoute: React.FC = () => {
  const isAuth = useAuth();
  const user = useAppSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();

  useEffect(() => {
    if (!isAuth || !user?.role) return;

    const role = user.role.toUpperCase();

    if (location.pathname === "/") {
      if (role === "ADMIN") navigate("/admin/products");
    }
  }, [isAuth, user, location, navigate]);

  return (
    // Если пользователь авторизован, отобразить Header и Outlet, иначе перенаправить на страницу авторизации
    isAuth ? (
      <>
        {user.role === "ADMIN" ? (
          <>
            <AdminHeader />
            <div className={classes.adminContent}>
              <Outlet />
            </div>
          </>
        ) : (
          <>
            <Header />
            <div className={classes.mainContent}>
              <Outlet />
            </div>
          </>
        )}
      </>
    ) : (
      <Navigate to="/login" />
    )
  );
};

export default PrivateRoute;
