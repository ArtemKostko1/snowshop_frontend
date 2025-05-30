import React, { useState } from 'react';
import { Box, Grid, Typography, Button, IconButton, Modal } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos, ZoomIn, Close } from '@mui/icons-material';
import { IProductDetails } from '../../../common/types/product/ProductDetailsTypes';
import { styled } from '@mui/material/styles';
import useStyles from './ProductDetails.styles';

interface ProductDetailsProps {
  product: IProductDetails;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const classes = useStyles();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Если данные продукта еще не загружены
  if (!product || !product.images || !product.name) {
    return <Box className={classes.root}>Загрузка данных...</Box>;
  }

  const handlePrev = () =>
    setImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  const handleNext = () =>
    setImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  const handleSizeClick = (size: string) => setSelectedSize(size);
  const handleThumbnailClick = (index: number) => setImageIndex(index);

  return (
    <Box className={classes.root}>
      <Grid container spacing={5}>
        {/* Левая часть: Картинки */}
        <Grid size={{ xs: 12, md: 6 }} className={classes.imageBlock}>
          <Box
            className={classes.imageCarousel}
            sx={{
              position: 'relative',
              height: 525, // Фиксированная высота для изображения
              overflow: 'hidden',
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <img
              src={product.images[imageIndex]}
              alt={product.name}
              className={classes.productImage}
              onClick={() => setOpenModal(true)}
              style={{
                cursor: 'pointer',
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
            <IconButton
              onClick={handlePrev}
              className={classes.arrowBtn}
              sx={{
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
              }}
            >
              <ArrowBackIos />
            </IconButton>
            <IconButton
              onClick={handleNext}
              className={classes.arrowBtn}
              sx={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
              }}
            >
              <ArrowForwardIos />
            </IconButton>

            {/* Миниатюры изображений, показываются только при наведении */}
            {isHovering && product.images.length > 1 && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 1,
                  p: 1,
                  overflowX: 'auto',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  transition: 'all 0.3s ease',
                  '&::-webkit-scrollbar': { height: 4 },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    borderRadius: 3,
                  },
                }}
              >
                {product.images.map((img, idx) => (
                  <Box
                    key={idx}
                    onClick={() => handleThumbnailClick(idx)}
                    sx={{
                      width: 60,
                      height: 60,
                      flexShrink: 0,
                      border: idx === imageIndex ? '2px solid #1976d2' : '2px solid transparent',
                      borderRadius: 1,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      '&:hover': { transform: 'scale(1.05)' },
                    }}
                  >
                    <img
                      src={img}
                      alt={`${product.name} - изображение ${idx + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          {/* Модальное окно для просмотра изображений */}
          <Modal open={openModal} onClose={() => setOpenModal(false)}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                maxWidth: 1000,
                maxHeight: '90vh',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 2,
                outline: 'none',
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                <IconButton onClick={() => setOpenModal(false)}>
                  <Close />
                </IconButton>
              </Box>

              <Box
                sx={{
                  position: 'relative',
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={product.images[imageIndex]}
                  alt={product.name}
                  style={{
                    maxWidth: '100%',
                    maxHeight: 'calc(90vh - 120px)',
                    objectFit: 'contain',
                  }}
                />
                <IconButton
                  onClick={handlePrev}
                  sx={{
                    position: 'absolute',
                    left: 16,
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
                  }}
                >
                  <ArrowBackIos />
                </IconButton>
                <IconButton
                  onClick={handleNext}
                  sx={{
                    position: 'absolute',
                    right: 16,
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
                  }}
                >
                  <ArrowForwardIos />
                </IconButton>
              </Box>

              {/* Миниатюры в модальном окне */}
              {product.images.length > 1 && (
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    mt: 2,
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  {product.images.map((img, idx) => (
                    <Box
                      key={idx}
                      onClick={() => handleThumbnailClick(idx)}
                      sx={{
                        width: 60,
                        height: 60,
                        border: idx === imageIndex ? '2px solid #1976d2' : '2px solid transparent',
                        borderRadius: 1,
                        overflow: 'hidden',
                        cursor: 'pointer',
                      }}
                    >
                      <img
                        src={img}
                        alt={`Миниатюра ${idx + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </Modal>
        </Grid>
        {/* Правая часть: Информация */}
        <Grid size={{ xs: 12, md: 6 }} className={classes.infoBlock}>
          <Typography variant="h5" className={classes.productName}>
            {product.name}
          </Typography>
          <Typography variant="subtitle1" className={classes.productArticle}>
            Артикул: {product.article}
          </Typography>
          <Box className={classes.sizeBlock}>
            <Typography variant="subtitle2">Размеры:</Typography>
            <Box className={classes.sizeButtons}>
              {product.size.map((size: string) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? 'contained' : 'outlined'}
                  color={selectedSize === size ? 'primary' : 'inherit'}
                  onClick={() => handleSizeClick(size)}
                  className={classes.sizeBtn}
                >
                  {size}
                </Button>
              ))}
            </Box>
          </Box>
          <Grid container spacing={2} className={classes.priceRow} alignItems="center">
            <Grid size={4}>
              <Typography variant="h6">{product.price} ₽</Typography>
            </Grid>
            <Grid size={4}>
              <Button variant="contained" color="primary" fullWidth>
                В КОРЗИНУ
              </Button>
            </Grid>
            <Grid size={4}>
              <Typography
                className={product.inStock ? classes.inStock : classes.preOrder}
                variant="body2"
              >
                {product.inStock ? 'в наличии' : 'предзаказ'}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* Нижний блок: Описание и внутренний код */}
        <Grid size={12}>
          <Typography variant="body1" className={classes.description}>
            {product.description}
          </Typography>
          <Typography variant="caption" className={classes.internalCode}>
            Внутренний код: {product.internalCode}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;
