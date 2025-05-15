import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Tabs,
  Tab,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoSmall from "../../../assets/logo/logo small";
import { useStyles } from "./Header.styles";
import { useAppDispatch } from "../../../store/hooks/app";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { logoutAction } from "../../../store/slices/auth/authSlice";

const AdminHeader: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] =
    useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logoutAction());
    setProfileMenuAnchorEl(null);
    navigate("/login");
  };

  const catalogItems = [
    "Горнолыжная одежда",
    "Лыжные комплекты",
    "Лыжные крепления",
    "Лыжные палки",
    "Лыжные ботинки",
    "Лыжи",
    "Чехлы для сноуборда и горных лыж",
    "Маски",
    "Защита",
    "Шлемы",
    "Сноуборд комплекты",
    "Сноуборды",
  ].sort();

  return (
    <AppBar
      className={classes.appBar}
      position="static"
      sx={{ backgroundColor: "#4dc6cb" }}
      elevation={0}
    >
      <Toolbar className={classes.toolbar}>
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
          <IconButton
            aria-label="profile"
            color="inherit"
            onClick={handleProfileMenuOpen}
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="profile-menu"
            anchorEl={profileMenuAnchorEl}
            open={Boolean(profileMenuAnchorEl)}
            onClose={handleProfileMenuClose}
          >
            <MenuItem onClick={handleProfileMenuClose}>
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Профиль</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Выход</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
