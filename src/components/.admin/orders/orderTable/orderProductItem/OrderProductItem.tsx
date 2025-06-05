import React from 'react';
import { Box, Typography, Grid, CardMedia } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import { IOrderItem } from '../../../../../common/types/order/orderTypes';
import { useStyles } from './OrderProductItem.styles';

interface OrderProductItemProps {
  orderItem: IOrderItem;
  isLast?: boolean;
}

const OrderProductItem: React.FC<OrderProductItemProps> = ({ orderItem, isLast = false }) => {
  const classes = useStyles();

  return (
    <Box className={`${classes.container} ${isLast ? classes.lastItem : ''}`}>
      <Grid container spacing={2}>
        {/* Изображение товара */}
        <Grid size={{ xs: 3 }} className={classes.imageContainer}>
          {orderItem.productImage ? (
            <CardMedia
              component="img"
              image={orderItem.productImage}
              alt={orderItem.productName}
              className={classes.image}
            />
          ) : (
            <Box className={classes.placeholderContainer}>
              <ImageIcon className={classes.placeholderIcon} />
            </Box>
          )}
        </Grid>

        {/* Информация о товаре */}
        <Grid size={{ xs: 6 }}>
          <Typography variant="h6" gutterBottom>
            {orderItem.productName}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Артикул: {orderItem.productArticle}
          </Typography>
          {orderItem.productSize && (
            <Typography
              variant="body2"
              color="text.secondary"
              className={classes.boldText}
              gutterBottom
            >
              Размер: {orderItem.productSize}
            </Typography>
          )}
          {orderItem.productInternalCode && (
            <Typography
              variant="body2"
              color="text.secondary"
              className={classes.boldText}
              gutterBottom
            >
              Код товара: {orderItem.productInternalCode}
            </Typography>
          )}
          {/* Количество */}
          <Box className={classes.quantityContainer}>
            <Typography variant="body1">
              Количество: <strong>{orderItem.quantity}</strong>
            </Typography>
          </Box>
        </Grid>

        {/* Цена */}
        <Grid size={{ xs: 3 }} className={classes.priceContainer}>
          <Typography variant="h6" color="primary" fontWeight="bold">
            {`${(orderItem.price * orderItem.quantity).toFixed(2)} BYN`}
          </Typography>
          {orderItem.quantity > 1 && (
            <Typography variant="caption" color="text.secondary">
              {`${orderItem.price.toFixed(2)} BYN за шт.`}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderProductItem;
