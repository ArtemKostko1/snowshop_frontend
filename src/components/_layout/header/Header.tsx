import React, { useEffect, useCallback, useRef, useState } from 'react';
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
  Button,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoSmall from '../../../assets/logo/logo small';
import { useStyles } from './Header.styles';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/app';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { logoutAction } from '../../../store/slices/auth/authSlice';
import { useShoppingCart } from '../../../store/hooks/shoppingCart/useShoppingCart';
import { getAllCategoriesThunk } from '../../../store/thunks/categories/categoriesThunk';
import { useCategories } from '../../../store/hooks/categories/useCategories';

const Header: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { totalItems } = useShoppingCart();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState<null | HTMLElement>(null);
  const user = useAppSelector((state) => state.auth.user);
  const isAuth = !!user?.role;
  const fetchCategoriesRef = useRef(false);

  const fetchData = useCallback(() => {
    dispatch(getAllCategoriesThunk());
  }, [dispatch]);

  useEffect(() => {
    if (fetchCategoriesRef.current) return;

    fetchData();

    fetchCategoriesRef.current = true;
  }, [fetchData]);

  const { categories, isCategoriesLoading } = useCategories();

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
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleCategoryClick = (categoryValue: string) => {
    handleMenuClose();
    navigate(`/catalog/category/${categoryValue}`);
  };

  return (
    <AppBar
      className={classes.appBar}
      position="sticky"
      sx={{ backgroundColor: '#4dc6cb' }}
      elevation={0}
    >
      <Toolbar className={classes.toolbar}>
        {/* Левая часть */}
        <Box
          sx={{
            width: '300px',
            display: 'flex',
            alignItems: 'center',
            minWidth: 'fit-content',
          }}
        >
          <LogoSmall onClick={() => navigate('/')} />
        </Box>

        {/* Центральная часть */}
        <Box
          sx={{
            width: '100%',
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            mx: 3,
          }}
        >
          <Tabs
            className={classes.tabs}
            value={false}
            indicatorColor="secondary"
            aria-label="navigation tabs"
            sx={{
              '& .MuiTab-root': {
                color: '#ffffff',
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
              {categories.map((item) => (
                <MenuItem key={item.id} onClick={() => handleCategoryClick(item.value as string)}>
                  {item.name}
                </MenuItem>
              ))}
            </Menu>
            <Tab
              className={classes.tab}
              label="Доставка и оплата"
              component={Link}
              to="/delivery"
            />
            <Tab className={classes.tab} label="Контакты" component={Link} to="/contacts" />
            <Tab className={classes.tab} label="О нас" component={Link} to="/about" />
          </Tabs>
        </Box>

        {/* Правая часть */}
        <Box
          sx={{
            width: '300px',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 1,
            minWidth: 'fit-content',
          }}
        >
          {!isAuth ? (
            <Button
              startIcon={<AccountCircleIcon />}
              onClick={handleLogin}
              sx={{
                color: '#fff',
                fontWeight: 500,
                fontSize: '1rem',
                px: 2,
              }}
            >
              Вход
            </Button>
          ) : (
            <>
              <IconButton aria-label="profile" color="inherit" onClick={handleProfileMenuOpen}>
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
            </>
          )}
          <IconButton aria-label="cart" color="inherit" component={Link} to="/shopping-cart">
            <Badge
              badgeContent={totalItems}
              sx={{
                '& .MuiBadge-badge': {
                  backgroundColor: '#00adb5',
                  color: 'white',
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
