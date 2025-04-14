import React, { useEffect } from "react";
//import DataTable from "../../../dataTable/DataTable";
import { productColumns } from "./tableColumns";

const ProductsTable: React.FC = (): JSX.Element => {
  //const { products, isProductsLoading } = useProducts();

  //   useEffect(() => {

  //   }, [products])

  const fieldsInitial = {
    name: "",
    price: "",
    categoryId: "",
    brandId: "",
    size: "",
    article: "",
    inStock: "",
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

  const tableOptions = {
    name: "Товары",
    table: "products",
    columns: productColumns(),
    requiredColumns: getRequiredColumns, // Список обязательных колонок
    //data: products,
    fieldsInitial: fieldsInitial,
    addingRows: false, // Возможность добавлять строки
    pageSize: 15,
    pageSizeOptions: [5, 10, 15, 25, 50],
    rowHeight: 26,
    //isLoading: isProductsLoading,
  };

  return (
    // <DataTable
    //   tableOptions={tableOptions}
    //   createFunction={createProduct}
    //   updateFunction={updateProduct}
    //   deleteFunction={deleteProduct}
    // />
    <></>
  );
};

export default ProductsTable;
