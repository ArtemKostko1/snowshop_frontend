import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import HomePage from "./components/home/HomePage";
import ProductsPage from "./components/.admin/products/ProductsPage";
import PrivateRoute from "./common/utils/router/PrivateRoute";
import Layout from "./components/.layout/main/Layout";
import store from "./store/store";
import AuthRootPage from "./components/auth/AuthRootComponent";
import RoleBasedRoute from "./common/utils/router/RoleBasedRoute";

// Клиентские маршруты
const clientRoutes = [{ path: "/", element: <HomePage /> }];

// Админские маршруты
const adminRoutes = [{ path: "/admin/products", element: <ProductsPage /> }];

const AppContent: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route element={<Layout children={<Outlet />} />}>
          {/* Обертка PrivateRoute, чтобы ограничивать маршрутизацию для неавторизованных пользователей */}
          <Route element={<PrivateRoute />}>
            {/* Клиентские маршруты */}
            {clientRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}

            {/* Админские маршруты с проверкой ролей */}
            {adminRoutes.map(({ path, element }) => (
              <Route
                key={path}
                path={path}
                element={
                  <RoleBasedRoute allowedRoles={["ADMIN"]}>
                    {element}
                  </RoleBasedRoute>
                }
              />
            ))}
          </Route>
          <Route path="login" element={<AuthRootPage />} />
          <Route path="register" element={<AuthRootPage />} />
        </Route>
      </Routes>
    </div>
  );
};

const ReduxWrapper: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

const App: React.FC = () => {
  return (
    <Router>
      <ReduxWrapper>
        <AppContent />
      </ReduxWrapper>
    </Router>
  );
};

export default App;
