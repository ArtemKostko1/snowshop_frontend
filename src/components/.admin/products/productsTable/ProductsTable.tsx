import React, { useCallback, useEffect, useRef } from 'react';
import DataTable from '../../../_common/dataTable/dataTable';
import { productColumns } from './tableColumns';
import { ITableOptions } from '../../../../common/types/table/tableTypes';
import { IProduct } from '../../../../common/types/product/productTypes';
import { useProducts } from '../../../../store/hooks/products/useProducts';
import { useBrands } from '../../../../store/hooks/brands/useBrands';
import { useCategories } from '../../../../store/hooks/categories/useCategories';
import { deleteProductThunk } from '../../../../store/thunks/products/productsThunk';
import { getAllBrandsThunk } from '../../../../store/thunks/brands/brandsThunk';
import { getAllCategoriesThunk } from '../../../../store/thunks/categories/categoriesThunk';
import { useAppDispatch } from '../../../../store/hooks/app';
import {
  createProductThunk,
  updateProductThunk,
  getAllProductsThunk,
} from '../../../../store/thunks/products/productsThunk';

const ProductsTable: React.FC = (): JSX.Element => {
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

  const { products, isProductsLoading } = useProducts();
  const { categories, isCategoriesLoading } = useCategories();
  const { brands, isBrandsLoading } = useBrands();

  const createProduct = async (newProductData: Omit<IProduct, 'id'>): Promise<IProduct> => {
    const formattedData = {
      ...newProductData,
      images:
        typeof newProductData.images === 'string'
          ? newProductData.images
              .split(',')
              .map((url) => url.trim())
              .filter((url) => url)
          : newProductData.images,
    };
    const result = await dispatch(createProductThunk(formattedData));
    if (result.meta.requestStatus === 'rejected') {
      throw new Error(result.payload as string);
    }
    return result.payload as IProduct;
  };

  const updateProduct = async (updatedProductData: IProduct): Promise<IProduct> => {
    const formattedData = {
      ...updatedProductData,
      images:
        typeof updatedProductData.images === 'string'
          ? (updatedProductData.images as string)
              .split(',')
              .map((url: string) => url.trim())
              .filter((url: string) => url)
          : updatedProductData.images,
    };
    const result = await dispatch(updateProductThunk(formattedData));
    if (result.meta.requestStatus === 'rejected') {
      throw new Error(result.payload as string);
    }
    return result.payload as IProduct;
  };

  const deleteProduct = async (productId: number): Promise<void> => {
    const result = await dispatch(deleteProductThunk(productId));
    if (result.meta.requestStatus === 'rejected') {
      throw new Error(result.payload as string);
    }
  };

  const getRequiredColumns = () => {
    const baseRequiredColumns = [
      'name',
      'price',
      'categoryId',
      'brandId',
      'article',
      'articleRoute',
      'inStock',
      'internalCode',
      'images',
    ];
    return baseRequiredColumns;
  };

  const tableOptions: ITableOptions<IProduct> = {
    name: 'Товары',
    table: 'products',
    columns: productColumns(categories, brands),
    requiredColumns: getRequiredColumns,
    data: [...products].reverse(),
    pageSize: 20,
    pageSizeOptions: [15, 20, 50, 100],
    rowHeight: 42,
    isLoading: isProductsLoading && isCategoriesLoading && isBrandsLoading,
    fieldsInitial: {
      name: '',
      price: undefined,
      categoryId: undefined,
      brandId: undefined,
      size: '',
      article: '',
      articleRoute: '',
      inStock: false,
      internalCode: '',
      description: '',
      images: [],
    },
  };

  return (
    <DataTable<IProduct>
      tableOptions={tableOptions}
      createFunction={createProduct}
      updateFunction={updateProduct}
      deleteFunction={deleteProduct}
    />
  );
};

export default ProductsTable;
