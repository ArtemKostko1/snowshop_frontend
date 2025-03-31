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
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoSmall from "../../../assets/logo/logo small";
import { useStyles } from "./Header.styles";

const Header: React.FC = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
    <AppBar position="static" sx={{ backgroundColor: "#4dc6cb" }} elevation={0}>
      <Toolbar className={classes.toolbar}>
        {/* Левая часть */}
        <LogoSmall />

        {/* Центральная часть */}
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Tabs
            className={classes.tabs}
            value={false}
            indicatorColor="secondary"
            aria-label="navigation tabs"
            sx={{
              "& .MuiTab-root": {
                color: "#ffffff", // Устанавливаем цвет текста
              },
            }}
          >
            <Tab
              className={classes.tab}
              label="Каталог"
              onClick={handleMenuOpen}
              aria-controls="catalog-menu"
              aria-haspopup="true"
            />
            <Menu
              id="catalog-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{
                onMouseLeave: handleMenuClose,
              }}
            >
              {catalogItems.map((item) => (
                <MenuItem
                  key={item}
                  component={Link}
                  to={`/catalog/${item.toLowerCase().replace(/ /g, "-")}`}
                  onClick={handleMenuClose}
                >
                  {item}
                </MenuItem>
              ))}
            </Menu>
            <Tab
              className={classes.tab}
              label="Доставка и оплата"
              component={Link}
              to="/delivery"
            />
            <Tab
              className={classes.tab}
              label="Контакты"
              component={Link}
              to="/contacts"
            />
            <Tab
              className={classes.tab}
              label="О нас"
              component={Link}
              to="/about"
            />
          </Tabs>
        </Box>

        {/* Правая часть */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton aria-label="profile" color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <IconButton aria-label="cart" color="inherit">
            <Badge
              badgeContent={10}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#00adb5", // Устанавливаем цвет фона
                  color: "white", // Устанавливаем цвет текста внутри Badge
                },
              }}
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
