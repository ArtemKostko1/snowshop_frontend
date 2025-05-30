import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Tabs,
  Tab,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LogoSmall from "../../../assets/logo/logo small";
import { useStyles } from "./Header.styles";
import { useAppDispatch } from "../../../store/hooks/app";
import LogoutIcon from "@mui/icons-material/Logout";
import { logoutAction } from "../../../store/slices/auth/authSlice";

const AdminHeader: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate("/");
  };

  return (
    <AppBar
      className={classes.appBar}
      position="static"
      sx={{ backgroundColor: "#4dc6cb" }}
      elevation={0}
    >
      <Toolbar className={classes.adminToolbar}>
        {/* Левая часть */}
        <Box
          sx={{
            width: "300px",
            display: "flex",
            alignItems: "center",
            minWidth: "fit-content",
          }}
        >
          <LogoSmall />
        </Box>

        {/* Центральная часть */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            mx: 3,
          }}
        >
          <Tabs
            className={classes.tabs}
            value={false}
            indicatorColor="secondary"
            aria-label="navigation tabs"
            sx={{
              "& .MuiTab-root": {
                color: "#ffffff",
              },
            }}
          >
            <Tab
              className={classes.tab}
              label="Товары"
              component={Link}
              to="/admin/products"
            />
            <Tab
              className={classes.tab}
              label="Словари"
              component={Link}
              to="/admin/dictionaries"
            />
          </Tabs>
        </Box>

        {/* Правая часть */}
        <Box
          sx={{
            width: "300px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 2,
            minWidth: "fit-content",
          }}
        >
          <Button
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
              sx={{
                color: '#fff',
                fontWeight: 500,
                fontSize: '1rem',
                px: 2
              }}
            >
              Выход
            </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
