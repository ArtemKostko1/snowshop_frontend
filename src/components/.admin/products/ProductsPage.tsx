import React, { useCallback, useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Grid";
// import {
//   createProductThunk,
//   deleteProductThunk,
//   getAllProductsThunk,
//   updateProductThunk,
// } from "../../store/thunks/product/productThunk";
import ProductsTable from "./productsTable/ProductsTable";
import { useStyles } from "./ProductsPage.styles";
import { useAppDispatch } from "../../../store/hooks/app";
import Box from "@mui/material/Box";

const ProductsPage: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const fetchProductsRef = useRef(false);

  const fetchData = useCallback(() => {
    // dispatch(getAllProductsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (fetchProductsRef.current) return;

    fetchData();

    fetchProductsRef.current = true;
  }, [fetchData]);

  // Функция для создания продукта
  const createProduct = (newProducteData) => {
    //return dispatch(createProductThunk(newProducteData));
  };

  // Функция для обновления продукта
  const updateProduct = async (updatedProductData) => {
    // const updateProduct = await dispatch(updateProductThunk(updatedProductData));
    // return updateProduct;
  };

  // Функция для удаления продукта
  const deleteProduct = (productId) => {
    //dispatch(deleteProductThunk(productId));
  };

  return (
    <div className={classes.productsPageContainer}>
      <div className={classes.productTable}>
        <ProductsTable
        createProduct={createProduct}
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
