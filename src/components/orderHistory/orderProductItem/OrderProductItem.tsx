import React from 'react';
import { Box, Typography } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import { useStyles } from './OrderProductItem.styles';
import { OrderProductItemProps } from '../../../common/types/order/orderHistoryTypes';

const OrderProductItem: React.FC<OrderProductItemProps> = ({ product }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      {/* Изображение товара */}
      <Box className={classes.imageContainer}>
        {product.productImage ? (
          <img src={product.productImage} alt={product.productName} className={classes.image} />
        ) : (
          <ImageIcon className={classes.placeholderIcon} />
        )}
      </Box>

      {/* Информация о товаре */}
      <Box className={classes.productInfo}>
        <Box>
          <Typography variant="body1" className={classes.productName}>
            {product.productName}
          </Typography>
          <Box className={classes.productDetails}>
            <Typography variant="body2" className={classes.productCode}>
              Артикул: {product.productArticle}
            </Typography>
            <Typography variant="body2" className={classes.productCode}>
              Код: {product.productInternalCode}
            </Typography>
            {product.productSize && (
              <Typography variant="body2" className={classes.productSize}>
                Размер: {product.productSize}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>

      {/* Цена и количество */}
      <Box className={classes.priceContainer}>
        <Typography variant="body1" className={classes.price}>
          {product.price.toFixed(2)} BYN
        </Typography>
        <Typography variant="body2" className={classes.quantity}>
          {product.quantity} шт.
        </Typography>
      </Box>
    </Box>
  );
};

export default OrderProductItem;
