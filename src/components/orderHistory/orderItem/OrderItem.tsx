import React from 'react';
import { Box, Typography, Divider, Chip } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import { useStyles } from './OrderItem.styles';
import { OrderItemProps } from '../../../common/types/order/orderHistoryTypes';
import OrderProductItem from '../orderProductItem/OrderProductItem';
import moment from 'moment';
import 'moment/locale/ru';

const OrderItem: React.FC<OrderItemProps> = ({ order }) => {
  const classes = useStyles();

  // Функция для определения стиля статуса заказа
  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return classes.statusPending;
      case 'processing':
        return classes.statusProcessing;
      case 'completed':
        return classes.statusDelivered;
      case 'cancelled':
        return classes.statusCancelled;
      default:
        return '';
    }
  };

  // Функция для форматирования даты
  const formatDate = (dateString: Date) => {
    try {
      moment.locale('ru');
      return moment(dateString).format('DD MMMM YYYY, HH:mm');
    } catch (error) {
      return 'Дата неизвестна';
    }
  };

  // Функция для перевода статуса заказа
  const getStatusLabel = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'Ожидает';
      case 'processing':
        return 'В обработке';
      case 'completed':
        return 'Завершен';
      case 'cancelled':
        return 'Отменен';
      default:
        return status;
    }
  };

  // Функция для перевода метода доставки
  const getDeliveryLabel = (delivery: string) => {
    switch (delivery.toLowerCase()) {
      case 'pickup':
        return 'Самовывоз';
      case 'delivery':
        return 'Доставка по адресу';
      default:
        return delivery;
    }
  };

  // Функция для перевода метода оплаты
  const getPaymentLabel = (payment: string) => {
    switch (payment.toLowerCase()) {
      case 'cash':
        return 'Наличными';
      case 'card':
        return 'Картой';
      default:
        return payment;
    }
  };

  return (
    <Box className={classes.orderCard}>
      {/* Заголовок заказа */}
      <Box className={classes.orderHeader}>
        <Box>
          <Typography variant="subtitle1" className={classes.orderNumber}>
            Заказ №{order.id}
          </Typography>
          <Typography variant="caption" className={classes.orderDate}>
            от {formatDate(order.createdAt)}
          </Typography>
        </Box>
        <Chip
          label={getStatusLabel(order.status)}
          className={`${classes.orderStatus} ${getStatusStyle(order.status)}`}
        />
      </Box>

      {/* Список товаров в заказе */}
      <Box className={classes.productsContainer}>
        {order.orderItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <OrderProductItem
              product={{
                id: item.id,
                productName: item.productName,
                productArticle: item.productArticle,
                productInternalCode: item.productInternalCode,
                productSize: item.productSize,
                productImage: item.productImage,
                quantity: item.quantity,
                price: item.price,
              }}
              isLastItem={index === order.orderItems.length - 1}
            />
            {index < order.orderItems.length - 1 && <Divider className={classes.productDivider} />}
          </React.Fragment>
        ))}
      </Box>

      {/* Футер заказа */}
      <Box className={classes.orderFooter}>
        <Box className={classes.orderInfo}>
          <Box className={classes.orderInfoItem}>
            <LocalShippingIcon fontSize="small" />
            <Typography variant="body2">
              Доставка: {getDeliveryLabel(order.delivery)}
              {order.delivery === 'pickup' && ` (ул. Притыцкого, дом 54)`}
            </Typography>
          </Box>
          <Box className={classes.orderInfoItem}>
            <PaymentIcon fontSize="small" />
            <Typography variant="body2">Оплата: {getPaymentLabel(order.paymentMethod)}</Typography>
          </Box>
        </Box>
        <Typography variant="h6" className={classes.totalPrice}>
          {order.totalPrice.toFixed(2)} BYN
        </Typography>
      </Box>
    </Box>
  );
};

export default OrderItem;
