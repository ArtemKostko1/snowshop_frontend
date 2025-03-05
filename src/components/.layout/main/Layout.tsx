import React from "react";
import { useStyles } from "./Layout.styles";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const classes = useStyles();

  const isSnowShopRoute = location.pathname === "/";
  return (
    <>
      <main className={classes.mainContainer}>
        <div
          className={
            isSnowShopRoute ? classes.mainContent : classes.loginContent
          }
        >
          <Outlet />
        </div>
      </main>
      <ToastContainer
        position="bottom-right"
        hideProgressBar={false}
        newestOnTop={true}
        pauseOnHover={false}
        draggable={true}
        pauseOnFocusLoss={false}
      />
    </>
  );
};

export default Layout;
