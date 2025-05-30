import React, { useCallback, useEffect, useRef } from "react";
import DataTable from "../../../_common/dataTable/dataTable";
import { categoryColumns } from "./tableColumns";
import { ITableOptions } from "../../../../common/types/table/tableTypes";
import { useCategories } from "../../../../store/hooks/categories/useCategories";
import { useAppDispatch } from "../../../../store/hooks/app";
import {
  createCategoryThunk,
  deleteCategoryThunk,
  getAllCategoriesThunk,
  updateCategoryThunk,
} from "../../../../store/thunks/categories/categoriesThunk";
import { ICategory } from "../../../../common/types/category/categoryTypes";
import { INavigationItem } from "../../../../common/types/table/toolbarTypes";

interface ICategoriesTableProps {
  navigationValue: number;
  navigationItems: INavigationItem[];
  onNavigationChange: (value: number) => void;
}

const CategoriesTable: React.FC<ICategoriesTableProps> = ({
  navigationValue,
  navigationItems,
  onNavigationChange,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const fetchCategoriesRef = useRef(false);

  const fetchData = useCallback(() => {
    dispatch(getAllCategoriesThunk());
  }, [dispatch]);

  useEffect(() => {
    if (fetchCategoriesRef.current) return;

    fetchData();

    fetchCategoriesRef.current = true;
  }, [fetchData]);

  // Функция для создания продукта
  const createCategory = async (
    newCategoryData: Omit<ICategory, "id">
  ): Promise<ICategory> => {
    const result = await dispatch(createCategoryThunk(newCategoryData));
    if (result.meta.requestStatus === "rejected") {
      throw new Error(result.payload as string);
    }
    return result.payload as ICategory;
  };

  // Функция для обновления продукта
  const updateCategory = async (
    updatedCategoryData: ICategory
  ): Promise<ICategory> => {
    const result = await dispatch(updateCategoryThunk(updatedCategoryData));
    if (result.meta.requestStatus === "rejected") {
      throw new Error(result.payload as string);
    }
    return result.payload as ICategory;
  };

  // Функция для удаления продукта
  const deleteCategory = async (categoryId: number): Promise<void> => {
    const result = await dispatch(deleteCategoryThunk(categoryId));
    if (result.meta.requestStatus === "rejected") {
      throw new Error(result.payload as string);
    }
  };

  const { categories, isCategoriesLoading } = useCategories();

  const getRequiredColumns = () => {
    const baseRequiredColumns = ["name", "value"];
    return baseRequiredColumns;
  };

  const tableOptions: ITableOptions<ICategory> = {
    name: "Категории",
    table: "categories",
    columns: categoryColumns(),
    requiredColumns: getRequiredColumns, // Список обязательных колонок
    data: categories,
    pageSize: 20,
    pageSizeOptions: [15, 20, 50, 100],
    rowHeight: 42,
    isLoading: isCategoriesLoading,
    fieldsInitial: {
      name: "",
      value: "",
    },
    navigation: {
      items: navigationItems,
      value: navigationValue,
      onChange: onNavigationChange,
    },
    defaultSort: [
      {
        field: "name",
        sort: "asc",
      },
    ],
  };

  return (
    <DataTable<ICategory>
      tableOptions={tableOptions}
      createFunction={createCategory}
      updateFunction={updateCategory}
      deleteFunction={deleteCategory}
    />
  );
};

export default CategoriesTable;
