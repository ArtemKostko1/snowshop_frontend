import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
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

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Открытие и закрытие подменю
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
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Левая часть */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: "bold",
            flexShrink: 0,
          }}
        >
          SnowShop
        </Typography>

        {/* Центральная часть */}
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Tabs
            value={false}
            textColor="inherit"
            indicatorColor="secondary"
            aria-label="navigation tabs"
          >
            <Tab
              label="Каталог"
              onMouseEnter={handleMenuOpen}
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
            <Tab label="Доставка и оплата" component={Link} to="/delivery" />
            <Tab label="Контакты" component={Link} to="/contacts" />
            <Tab label="О нас" component={Link} to="/about" />
          </Tabs>
        </Box>

        {/* Правая часть */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton aria-label="profile" color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <IconButton aria-label="cart" color="inherit">
            <Badge badgeContent={10} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
