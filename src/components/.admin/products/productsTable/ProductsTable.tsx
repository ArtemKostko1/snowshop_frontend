import React, { useEffect } from "react";
import DataTable from "../../../.common/dataTable/dataTable";
import { productColumns } from "./tableColumns";
import { ITableOptions } from "../../../../common/types/table/tableTypes";
import {
  IProduct,
  IProductTable,
} from "../../../../common/types/product/productTypes";
import { useProducts } from "../../../../store/hooks/products/useProducts";
import { useBrands } from "../../../../store/hooks/brands/useBrands";
import { useCategories } from "../../../../store/hooks/categories/useCategories";

const ProductsTable: React.FC<IProductTable> = ({
  createProduct,
  updateProduct,
  deleteProduct,
}): JSX.Element => {
  const { products, isProductsLoading } = useProducts();
  const { categories, isCategoriesLoading } = useCategories();
  const { brands, isBrandsLoading } = useBrands();

  useEffect(() => {}, [products]);

  const fieldsInitial: Partial<IProduct> = {
    name: "",
    price: undefined,
    categoryId: undefined,
    brandId: undefined,
    size: "",
    article: "",
    inStock: false,
    internalCode: "",
    description: "",
    isNew: true,
  };

  const getRequiredColumns = () => {
    const baseRequiredColumns = [
      "name",
      "price",
      "categoryId",
      "brandId",
      "article",
      "inStock",
      "internalCode",
    ];
    return baseRequiredColumns;
  };

  const tableOptions: ITableOptions = {
    name: "Товары",
    table: "products",
    columns: productColumns(categories, brands),
    requiredColumns: getRequiredColumns, // Список обязательных колонок
    data: products,
    fieldsInitial: fieldsInitial,
    pageSize: 20,
    pageSizeOptions: [15, 20, 50, 100],
    rowHeight: 42,
    isLoading: isProductsLoading,
  };

  return (
    <DataTable
      tableOptions={tableOptions}
      createFunction={createProduct}
      updateFunction={updateProduct}
      deleteFunction={deleteProduct}
    />
  );
};

export default ProductsTable;
