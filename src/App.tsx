import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import HomePage from "./components/home/HomePage";
import PrivateRoute from "./common/utils/router/PrivateRoute";
import Layout from "./components/.layout/main/Layout";
import store from "./store/store";
import AuthRootPage from "./components/auth/AuthRootPage";

const AppContent: React.FC = () => {
  // Определение путей навигации
  // В дальнейшем route "/" будет реализован для страницы монитора
  const paths: string[] = ["/", "catalog", "delivery", "contacts", "about"];

  // Определение главных компонентов при навигации
  const elements: ReactNode[] = [<HomePage />];

  return (
    <div className="app">
      <Routes>
        <Route element={<Layout children={<Outlet />} />}>
          {/* Обертка PrivateRoute, чтобы ограничивать маршрутизацию для неавторизованных пользователей */}
          <Route element={<PrivateRoute />}>
            {paths.map((path, index) => (
              <Route key={index} path={path} element={elements[index]} />
            ))}
          </Route>
          <Route path="login" element={<AuthRootPage />} />
          <Route path="register" element={<AuthRootPage />} />
        </Route>
      </Routes>
    </div>
  );
};

// Обертка для управления состоянием. children - вложенные компоненты
interface ReduxWrapperProps {
  children: ReactNode;
}

// Обертка для управления состоянием. children - вложенные компоненты
const ReduxWrapper: React.FC<ReduxWrapperProps> = ({ children }) => (
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
