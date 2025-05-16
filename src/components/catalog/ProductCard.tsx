import React from "react";
import { IProduct } from "../../common/types/product/productTypes";
import styles from "./ProductCard.styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.imageWrapper}>
        {/* Здесь будет изображение товара */}
        <Box
          component="img"
          src={"/no-image.png"}
          alt={product.name}
          sx={styles.image}
        />
      </Box>
      <Typography sx={styles.name}>{product.name}</Typography>
      <Box sx={styles.infoRow}>
        <Typography sx={styles.price} component="span">
          {product.price ? product.price + " ₽" : "-"}
        </Typography>
        <Typography sx={styles.inStock} component="span">
          {product.inStock ? "в наличии" : "нет в наличии"}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;
