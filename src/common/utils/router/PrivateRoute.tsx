import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../../components/_layout/header/Header';
import { useAuth } from '../../../store/hooks/auth/useAuth';
import { useAppSelector } from '../../../store/hooks/app';
import { useStyles } from '../../../components/_layout/main/Layout.styles';
import AdminHeader from '../../../components/_layout/header/AdminHeader';

const PrivateRoute: React.FC = () => {
  const isAuth = useAuth();
  const user = useAppSelector((state) => state.auth.user);
  const classes = useStyles();

  return (
    // Если пользователь авторизован, отобразить Header и Outlet, иначе перенаправить на страницу авторизации
    isAuth && user.role === 'ADMIN' ? (
      <>
        <AdminHeader />
        <main className={classes.main}>
          <div className={classes.adminContent}>
            <Outlet />
          </div>
        </main>
      </>
    ) : (
      <>
        <Header />
        <main className={classes.main}>
          <div className={classes.mainContent}>
            <Outlet />
          </div>
        </main>
      </>
    )
  );
};

export default PrivateRoute;
