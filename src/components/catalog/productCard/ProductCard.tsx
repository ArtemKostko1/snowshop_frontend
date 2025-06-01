import React from 'react';
import styles from './ProductCard.styles';
import { Card, CardContent, CardMedia, Typography, Box, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { IProductDetails } from '../../../common/types/product/ProductDetailsTypes';

interface ProductCardProps {
  product: IProductDetails;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const previewCarImage = product.images[0];
  const navigate = useNavigate();

  return (
    <Box onClick={() => navigate(`/catalog/${product.articleRoute}`)} style={{ cursor: 'pointer' }}>
      <Card sx={styles.card}>
        <CardMedia component="img" image={previewCarImage} alt={product.name} sx={styles.image} />
        <CardContent
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography sx={styles.name}>{product.name}</Typography>
          <Box sx={styles.infoRow}>
            <Typography sx={styles.price}>
              {product.price ? product.price + ' BYN' : '-'}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography sx={styles.inStock(product.inStock)}>
                {product.inStock ? 'в наличии' : 'предзаказ'}
              </Typography>

              <IconButton
                onClick={() => navigate(`/catalog/${product.articleRoute}`)}
                sx={{
                  color: '#f44336',
                  '&:hover': {
                    backgroundColor: 'rgba(244, 67, 54, 0.1)',
                  },
                }}
              >
                <ShoppingCartIcon />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductCard;
