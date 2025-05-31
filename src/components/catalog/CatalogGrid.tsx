import React from "react";
import { IProductDetails } from "../../common/types/product/ProductDetailsTypes";
import ProductCard from "./productCard/ProductCard";
import Grid from "@mui/material/Grid";

interface CatalogGridProps {
  products: IProductDetails[];
}

const CatalogGrid: React.FC<CatalogGridProps> = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid size={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CatalogGrid;
