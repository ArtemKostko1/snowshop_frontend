import React, { useEffect, useMemo } from 'react';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { getOrdersByUserIdThunk } from '../../store/thunks/orders/ordersThunk';
import { useOrders } from '../../store/hooks/orders/useOrders';
import { useStyles } from './OrderHistoryPage.styles';
import OrderItem from './orderItem/OrderItem';
import { OrderHistoryPageProps } from '../../common/types/order/orderHistoryTypes';

const OrderHistoryPage: React.FC<OrderHistoryPageProps> = ({ userId }) => {
  const classes = useStyles();
  const dispatch = useDispatch<AppDispatch>();
  const { userOrders, isUserOrdersLoading } = useOrders();

  useEffect(() => {
    if (userId) {
      dispatch(getOrdersByUserIdThunk(userId));
    } else {
      const storedUserId = sessionStorage.getItem('id');
      if (storedUserId) {
        dispatch(getOrdersByUserIdThunk(Number(storedUserId)));
      }
    }
  }, [dispatch, userId]);

  // Сортировка заказов от новых к старым
  const sortedOrders = useMemo(() => {
    if (!userOrders) return [];
    return [...userOrders].sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }, [userOrders]);

  // Отображение загрузки
  if (isUserOrdersLoading) {
    return (
      <Container className={classes.container}>
        <Box className={classes.loadingContainer}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  // Если нет заказов
  if (!userOrders || userOrders.length === 0) {
    return (
      <Container className={classes.container}>
        <Box className={classes.title}>
          <Typography variant="h4">История заказов</Typography>
          <Typography variant="subtitle1">0 заказов</Typography>
        </Box>
        <Box className={classes.emptyState}>
          <Typography variant="h6">У вас пока нет заказов</Typography>
          <Typography variant="body2">Оформите свой первый заказ в нашем магазине</Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container className={classes.container}>
      <Box className={classes.title}>
        <Typography variant="h4">История заказов</Typography>
        <Typography variant="subtitle1">{sortedOrders.length} заказов</Typography>
      </Box>

      <Box className={classes.ordersContainer}>
        {sortedOrders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </Box>
    </Container>
  );
};

export default OrderHistoryPage;
