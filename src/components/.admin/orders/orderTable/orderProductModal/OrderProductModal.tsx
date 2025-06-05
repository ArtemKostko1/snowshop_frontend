import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { IOrder } from '../../../../../common/types/order/orderTypes';
import OrderProductItem from '../orderProductItem/OrderProductItem';
import { useStyles } from './OrderProductModal.styles';

interface OrderProductModalProps {
  open: boolean;
  onClose: () => void;
  order: IOrder | null;
}

const OrderProductModal: React.FC<OrderProductModalProps> = ({ open, onClose, order }) => {
  const classes = useStyles();

  if (!order) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
      classes={{ paper: classes.dialogPaper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <Typography variant="h6">Товары в заказе #{order.id}</Typography>
        <IconButton aria-label="close" onClick={onClose} className={classes.closeButton}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent} dividers={false}>
        {order.orderItems.length > 0 ? (
          <>
            {order.orderItems.map((item, index) => (
              <OrderProductItem
                key={item.id}
                orderItem={item}
                isLast={index === order.orderItems.length - 1}
              />
            ))}
          </>
        ) : (
          <Typography variant="body1" align="center">
            В заказе нет товаров
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default OrderProductModal;
