import React, { useEffect } from 'react';
import {
  Box,
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
  Divider,
} from '@mui/material';
import CartItemCard from './CartItemCard/CartItemCard';
import { useShoppingCart } from '../../store/hooks/shoppingCart/useShoppingCart';
import {
  IShoppingCartForm,
} from '../../common/types/shoppingCart/shoppingCartTypes';
import { useAppSelector } from '../../store/hooks/app';
import { useAuth } from '../../store/hooks/auth/useAuth';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createOrderThunk } from '../../store/thunks/orders/ordersThunk';
import { ICreateOrderDto } from '../../common/types/order/orderTypes';
import { AppDispatch } from '../../store/store';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { OrderFormSchema } from '../../utils/yup/yupSchemas';

const ShoppingCartPage: React.FC = () => {
  const { items, clearCart } = useShoppingCart();
  const isAuth = useAuth();
  const user = useAppSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IShoppingCartForm>({
    resolver: yupResolver(OrderFormSchema) as any,
    defaultValues: {
      email: '',
      phone: '',
      deliveryMethod: 'pickup',
      paymentMethod: 'card',
      comment: '',
    },
  });

  useEffect(() => {
    if (isAuth && user) {
      setValue('email', user.email || '');
      setValue('phone', user.phoneNumber || '');
    }
  }, [isAuth, user, setValue]);

  // Группировка товаров по уникальному ключу (id + size)
  const groupedItems = items.reduce((acc, current) => {
    const key: string = `${current.product.id}_${current.product.size || 'default'}`;

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

  const onSubmitOrder: SubmitHandler<IShoppingCartForm> = (formData) => {
    try {
      // Формируем объект orderData на основе данных формы
      const orderData: ICreateOrderDto = {
        email: formData.email,
        phoneNumber: formData.phone,
        userId: isAuth && user ? user.id : undefined,
        delivery: formData.deliveryMethod,
        paymentMethod: formData.paymentMethod,
        comment: formData.comment || undefined,
        orderItems: uniqueItems.map((item) => ({
          productInternalCode: item.product.internalCode,
          productSize: item.product.size,
          quantity: item.quantity,
        })),
      };

      // Отправляем заказ на сервер
      dispatch(createOrderThunk(orderData));

      // Очищаем корзину после успешного оформления заказа
      clearCart();

      // Перенаправляем на страницу подтверждения заказа
      navigate('/');
    } catch (error) {
      console.error('Ошибка при оформлении заказа:', error);
    }
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
                  key={`${item.product.id}_${item.product.size || 'default'}_${index}`}
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

            <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit(onSubmitOrder)}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    margin="normal"
                    label="Email"
                    type="email"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />

              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    margin="normal"
                    label="Телефон"
                    type="tel"
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                  />
                )}
              />

              <FormControl component="fieldset" margin="normal" fullWidth>
                <FormLabel component="legend">Способ доставки</FormLabel>
                <Controller
                  name="deliveryMethod"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup {...field}>
                      <FormControlLabel value="pickup" control={<Radio />} label="Самовывоз" />
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ ml: 4, mt: -1, mb: 1 }}
                      >
                        ул. Притыцкого, дом 54
                      </Typography>
                      <FormControlLabel value="delivery" control={<Radio />} label="Доставка" />
                    </RadioGroup>
                  )}
                />
                {errors.deliveryMethod && (
                  <Typography color="error" variant="caption">
                    {errors.deliveryMethod.message}
                  </Typography>
                )}
              </FormControl>

              <FormControl component="fieldset" margin="normal" fullWidth>
                <FormLabel component="legend">Способ оплаты</FormLabel>
                <Controller
                  name="paymentMethod"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup {...field}>
                      <FormControlLabel value="cash" control={<Radio />} label="Наличные" />
                      <FormControlLabel value="card" control={<Radio />} label="Оплата картой" />
                    </RadioGroup>
                  )}
                />
                {errors.paymentMethod && (
                  <Typography color="error" variant="caption">
                    {errors.paymentMethod.message}
                  </Typography>
                )}
              </FormControl>

              <Controller
                name="comment"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    margin="normal"
                    label="Комментарий к заказу"
                    multiline
                    rows={4}
                  />
                )}
              />

              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                type="submit"
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
