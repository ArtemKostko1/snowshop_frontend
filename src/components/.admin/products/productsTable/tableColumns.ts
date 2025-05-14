import { GridColDef } from "@mui/x-data-grid";
import { ICategory } from "../../../../common/types/category/categoryTypes";
import { IBrand } from "../../../../common/types/brand/brandTypes";

export const productColumns = (
  categories: ICategory[],
  brands: IBrand[]
): GridColDef[] => {
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Наименование",
      type: "string",
      align: "center",
      headerAlign: "center",
      editable: true,
      flex: 1,
      minWidth: 150,
    },
    {
      field: "price",
      headerName: "Цена",
      type: "number",
      align: "center",
      headerAlign: "center",
      editable: true,
      flex: 1,
      minWidth: 150,
    },
    {
      field: "categoryId",
      headerName: "Категория",
      type: "singleSelect",
      align: "center",
      headerAlign: "center",
      editable: true,
      flex: 1,
      width: 200,
      valueOptions: [...categories]
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((category) => ({
          value: category.id,
          label: category.name,
        })),
    },
    {
      field: "brandId",
      headerName: "Бренд",
      type: "singleSelect",
      align: "center",
      headerAlign: "center",
      editable: true,
      flex: 1,
      minWidth: 150,
      valueOptions: [...brands]
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((brand) => ({
          value: brand.id,
          label: brand.name,
        })),
    },
    {
      field: "size",
      headerName: "Размер",
      type: "string",
      align: "center",
      headerAlign: "center",
      editable: true,
      flex: 1,
      minWidth: 75,
    },
    {
      field: "article",
      headerName: "Артикул",
      type: "string",
      align: "center",
      headerAlign: "center",
      editable: true,
      flex: 1,
      minWidth: 75,
    },
    {
      field: "inStock",
      headerName: "Наличие",
      type: "boolean",
      align: "center",
      headerAlign: "center",
      editable: true,
      flex: 1,
      minWidth: 75,
    },
    {
      field: "internalCode",
      headerName: "Код товара",
      type: "string",
      align: "center",
      headerAlign: "center",
      editable: true,
      flex: 1,
      minWidth: 75,
    },
    {
      field: "description",
      headerName: "Описание",
      type: "string",
      align: "left",
      headerAlign: "left",
      editable: true,
      flex: 1,
      minWidth: 250,
    },
  ];

  return columns;
};
