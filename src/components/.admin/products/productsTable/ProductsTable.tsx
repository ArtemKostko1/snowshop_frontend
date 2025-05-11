import React from "react";
import DataTable from "../../../.common/dataTable/dataTable";
import { productColumns } from "./tableColumns";
import {
  IProductTable,
  ITableOptions,
  IProduct,
} from "../../../../common/types/table/tableTypes";

const ProductsTable: React.FC<IProductTable> = ({
  createProduct,
  updateProduct,
  deleteProduct,
}): JSX.Element => {
  //const { products, isProductsLoading } = useProducts();

  //   useEffect(() => {

  //   }, [products])

  const fieldsInitial: Partial<IProduct> = {
    name: "",
    price: 0,
    categoryId: "",
    brandId: "",
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
    columns: productColumns(),
    requiredColumns: getRequiredColumns, // Список обязательных колонок
    //data: products,
    fieldsInitial: fieldsInitial,
    pageSize: 20,
    pageSizeOptions: [20, 50, 100, 200, 500],
    rowHeight: 32,
    //isLoading: isProductsLoading,
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
