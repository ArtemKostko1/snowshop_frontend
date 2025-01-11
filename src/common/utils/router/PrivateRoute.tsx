import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../../../components/layout/main/Layout";

const PrivateRoute: React.FC = () => {
  const isAuthenticated = true; // Замените на логику проверки авторизации
  return isAuthenticated ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="login" />
  );
};

export default PrivateRoute;

