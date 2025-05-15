import React, { useCallback } from "react";
import ProductsTable from "./productsTable/ProductsTable";
import { useStyles } from "./ProductsPage.styles";

const ProductsPage: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.productsPageContainer}>
      <div className={classes.productTable}>
        <ProductsTable />
      </div>
    </div>
  );
};

export default ProductsPage;
