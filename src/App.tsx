import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './components/catalog/CatalogPage';
import ProductsPage from './components/.admin/products/ProductsPage';
import DictionariesPage from './components/.admin/dictionaries/DictionariesPage';
import PrivateRoute from './common/utils/router/PrivateRoute';
import Layout from './components/_layout/main/Layout';
import store from './store/store';
import AuthRootPage from './components/auth/AuthRootComponent';
import RoleBasedRoute from './common/utils/router/RoleBasedRoute';
import ProductDetailsWrapper from './components/catalog/productDetails/ProductDetailsWrapper';
import ShoppingCartPage from './components/shoppingCart/ShoppingCartPage';
import OrdersPage from './components/.admin/orders/OrdersPage';
import UserProfileContainer from './components/userProfile/UserProfileContainer';
import OrderHistoryPage from './components/orderHistory/OrderHistoryPage';
import DeliveryPage from './components/delivery/DeliveryPage';
import ContactsPage from './components/contacts/ContactsPage';
import AboutPage from './components/about/AboutPage';

// Клиентские маршруты
const clientRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/catalog/category/:categoryName', element: <HomePage /> },
  { path: '/catalog/:articleRoute', element: <ProductDetailsWrapper /> },
  { path: '/shopping-cart', element: <ShoppingCartPage /> },
  { path: '/user-profile', element: <UserProfileContainer /> },
  { path: '/order-history', element: <OrderHistoryPage /> },
  { path: '/delivery', element: <DeliveryPage /> },
  { path: '/contacts', element: <ContactsPage /> },
  { path: '/about', element: <AboutPage /> },
];

// Админские маршруты
const adminRoutes = [
  { path: '/admin/orders', element: <OrdersPage /> },
  { path: '/admin/products', element: <ProductsPage /> },
  { path: '/admin/dictionaries', element: <DictionariesPage /> },
];

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
                element={<RoleBasedRoute allowedRoles={['ADMIN']}>{element}</RoleBasedRoute>}
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
