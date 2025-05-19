import React from "react";
import { useStyles } from "./Layout.styles";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.mainContainer}>
        <Outlet />
      </div>
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
