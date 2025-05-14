import React, { useCallback, useEffect, useRef } from "react";
import {
  getAllProductsThunk,
  createProductThunk,
  updateProductThunk,
  deleteProductThunk,
} from "../../../store/thunks/products/productsThunk";
import ProductsTable from "./productsTable/ProductsTable";
import { useStyles } from "./ProductsPage.styles";
import { useAppDispatch } from "../../../store/hooks/app";
import { IProduct } from "../../../common/types/product/productTypes";
import { getAllBrandsThunk } from "../../../store/thunks/brands/brandsThunk";
import { getAllCategoriesThunk } from "../../../store/thunks/categories/categoriesThunk";

const ProductsPage: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const fetchProductsRef = useRef(false);
  const fetchCategoriesRef = useRef(false);
  const fetchBrandsRef = useRef(false);

  const fetchData = useCallback(() => {
    dispatch(getAllProductsThunk());
    dispatch(getAllCategoriesThunk());
    dispatch(getAllBrandsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (fetchProductsRef.current) return;
    if (fetchCategoriesRef.current) return;
    if (fetchBrandsRef.current) return;

    fetchData();
    
    fetchProductsRef.current = true;
    fetchCategoriesRef.current = true;
    fetchBrandsRef.current = true;
  }, [fetchData]);

  // Функция для создания продукта
  const createProduct = async (
    newProductData: Omit<IProduct, "id">
  ): Promise<IProduct> => {
    const result = await dispatch(createProductThunk(newProductData));
    if (result.meta.requestStatus === "rejected") {
      throw new Error(result.payload as string);
    }
    return result.payload as IProduct;
  };

  // Функция для обновления продукта
  const updateProduct = async (
    updatedProductData: IProduct
  ): Promise<IProduct> => {
    const result = await dispatch(updateProductThunk(updatedProductData));
    if (result.meta.requestStatus === "rejected") {
      throw new Error(result.payload as string);
    }
    return result.payload as IProduct;
  };

  // Функция для удаления продукта
  const deleteProduct = async (productId: number): Promise<void> => {
    const result = await dispatch(deleteProductThunk(productId));
    if (result.meta.requestStatus === "rejected") {
      throw new Error(result.payload as string);
    }
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
