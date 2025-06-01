import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  FormControl,
  FormLabel,
  Alert,
  Divider,
} from '@mui/material';
import CartItemCard from './CartItemCard/CartItemCard';
import { useShoppingCart } from '../../store/hooks/shoppingCart/useShoppingCart';
import {
  ICartItemUniqueKey,
  IShoppingCartForm,
} from '../../common/types/shoppingCart/shoppingCartTypes';
import { useAppSelector } from '../../store/hooks/app';
import { useAuth } from '../../store/hooks/auth/useAuth';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';

const ShoppingCartPage: React.FC = () => {
  const { items } = useShoppingCart();
  const isAuth = useAuth();
  const user = useAppSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<IShoppingCartForm>({
    email: '',
    phone: '',
    deliveryMethod: 'pickup',
    paymentMethod: 'card',
    comment: '',
  });

  useEffect(() => {
    if (isAuth && user) {
      setFormData((prev) => ({
        ...prev,
        email: user.email || '',
        //phone: user.phoneNumber || '',
      }));
    }
  }, [isAuth, user]);

  // Группировка товаров по уникальному ключу (internalCode + size)
  const groupedItems = items.reduce((acc, current) => {
    const key: string = `${current.product.internalCode}_${current.product.size || 'default'}`;

    if (!acc[key]) {
      acc[key] = {
        product: current.product,
        quantity: current.quantity,
      };
    } else {
      acc[key].quantity += current.quantity;
    }

    return acc;
  }, {} as Record<string, { product: any; quantity: number }>);

  // Преобразование сгруппированных товаров в массив
  const uniqueItems = Object.values(groupedItems);

  // Расчет общей стоимости корзины
  const totalCartPrice = uniqueItems.reduce((total, item) => {
    return total + (item.product.price || 0) * item.quantity;
  }, 0);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitOrder = () => {
    // Здесь будет логика оформления заказа
    console.log('Оформление заказа с данными:', formData);
    console.log('Товары в корзине:', uniqueItems);
  };

  if (items.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
          py: 8,
        }}
      >
        <ShoppingCartOutlinedIcon sx={{ fontSize: 120, color: 'grey.400', mb: 4 }} />
        <Typography variant="h5" gutterBottom>
          Ваша корзина пуста
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 450 }}>
          Пожалуйста, добавьте товары для оформления заказа
        </Typography>
        <Button variant="contained" color="primary" size="large" onClick={() => navigate('/')}>
          Перейти в каталог
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Корзина
      </Typography>

      <Grid container spacing={3}>
        {/* Левая колонка - список товаров */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Paper sx={{ p: 3, mb: 3, boxShadow: 0 }}>
            <Typography variant="h6" gutterBottom>
              Товары в корзине ({uniqueItems.length})
            </Typography>
            <Box>
              {uniqueItems.map((item, index) => (
                <React.Fragment
                  key={`${item.product.internalCode}_${item.product.size || 'default'}_${index}`}
                >
                  <CartItemCard product={item.product} quantity={item.quantity} />
                  {index < uniqueItems.length - 1 && <Divider sx={{ my: 2 }} />}
                </React.Fragment>
              ))}
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6">Итого:</Typography>
              <Typography variant="h5" color="primary" fontWeight="bold">
                {totalCartPrice.toFixed(2)} BYN
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Правая колонка - форма заказа */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 3, boxShadow: 0 }}>
            <Typography variant="h6" gutterBottom>
              Оформление заказа
            </Typography>

            <Box component="form" sx={{ mt: 3 }}>
              <TextField
                required
                fullWidth
                margin="normal"
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleFormChange}
              />

              <TextField
                required
                fullWidth
                margin="normal"
                label="Телефон"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleFormChange}
              />

              <FormControl component="fieldset" margin="normal" fullWidth>
                <FormLabel component="legend">Способ доставки</FormLabel>
                <RadioGroup
                  name="deliveryMethod"
                  value={formData.deliveryMethod}
                  onChange={handleFormChange}
                >
                  <FormControlLabel value="pickup" control={<Radio />} label="Самовывоз" />
                  <FormControlLabel value="delivery" control={<Radio />} label="Доставка" />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" margin="normal" fullWidth>
                <FormLabel component="legend">Способ оплаты</FormLabel>
                <RadioGroup
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleFormChange}
                >
                  <FormControlLabel value="cash" control={<Radio />} label="Наличные" />
                  <FormControlLabel value="card" control={<Radio />} label="Оплата картой" />
                </RadioGroup>
              </FormControl>

              <TextField
                fullWidth
                margin="normal"
                label="Комментарий к заказу"
                name="comment"
                multiline
                rows={4}
                value={formData.comment}
                onChange={handleFormChange}
              />

              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                onClick={handleSubmitOrder}
                sx={{ mt: 3 }}
              >
                Оформить заказ
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShoppingCartPage;
