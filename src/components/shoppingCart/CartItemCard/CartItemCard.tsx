import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Grid,
  Card,
  CardMedia,
  ButtonGroup,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import ImageIcon from '@mui/icons-material/Image';
import { IProduct } from '../../../common/types/product/productTypes';
import { useShoppingCart } from '../../../store/hooks/shoppingCart/useShoppingCart';

interface CartItemCardProps {
  product: IProduct;
  quantity: number;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ product, quantity }) => {
  const { updateQuantity, removeFromCart } = useShoppingCart();

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, quantity + 1, product.size);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1, product.size);
    }
  };

  const handleRemoveItem = () => {
    removeFromCart(product.id, product.size);
  };

  const imageUrl =
    product.images && product.images.length > 0
      ? product.images[0]
      : 'https://via.placeholder.com/150';

  return (
    <Card sx={{ p: 2, mb: 2, position: 'relative', boxShadow: 'none', border: 'none' }}>
      <IconButton
        onClick={handleRemoveItem}
        size="small"
        sx={{ position: 'absolute', top: 8, right: 8 }}
      >
        <CloseIcon />
      </IconButton>

      <Grid container spacing={2}>
        {/* Изображение товара */}
        <Grid
          size={{ xs: 3 }}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {product.images && product.images.length > 0 ? (
            <CardMedia
              component="img"
              image={imageUrl}
              alt={product.name}
              sx={{
                height: 120,
                objectFit: 'contain',
                borderRadius: 1,
              }}
            />
          ) : (
            <Box
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 120 }}
            >
              <ImageIcon sx={{ fontSize: 64, color: 'grey.400' }} />
            </Box>
          )}
        </Grid>

        {/* Информация о товаре */}
        <Grid size={{ xs: 6 }}>
          <Typography variant="h6" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Артикул: {product.article}
          </Typography>
          {product.size && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: 'bold' }}
              gutterBottom
            >
              Размер: {product.size}
            </Typography>
          )}

          {/* Контроль количества */}
          <Box sx={{ mt: 2 }}>
            <ButtonGroup size="small" aria-label="quantity control">
              <Button onClick={handleDecreaseQuantity} disabled={quantity <= 1}>
                <RemoveIcon fontSize="small" />
              </Button>
              <Button disableRipple disableFocusRipple sx={{ cursor: 'default' }}>
                {quantity}
              </Button>
              <Button onClick={handleIncreaseQuantity}>
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </Box>
        </Grid>

        {/* Цена */}
        <Grid
          size={{ xs: 3 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
        >
          <Typography variant="h6" color="primary" fontWeight="bold">
            {product.price ? `${(product.price * quantity).toFixed(2)} BYN` : 'Нет в наличии'}
          </Typography>
          {quantity > 1 && (
            <Typography variant="caption" color="text.secondary">
              {product.price ? `${product.price.toFixed(2)} BYN за шт.` : ''}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Card>
  );
};

export default CartItemCard;
