import React from "react";
import { IProduct } from "../../common/types/product/productTypes";
import ProductCard from "./productCard/ProductCard";
import Grid from "@mui/material/Grid";

interface CatalogGridProps {
  products: IProduct[];
}

const CatalogGrid: React.FC<CatalogGridProps> = ({ products }) => {
  return (
    <Grid container spacing={3} sx={{ marginTop: 4 }}>
      {products.map((product) => (
        <Grid size={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CatalogGrid;
