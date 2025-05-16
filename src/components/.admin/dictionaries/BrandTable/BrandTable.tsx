import React, { useCallback, useEffect, useRef } from "react";
import DataTable from "../../../_common/dataTable/dataTable";
import { brandColumns } from "./tableColumns";
import { ITableOptions } from "../../../../common/types/table/tableTypes";
import { useBrands } from "../../../../store/hooks/brands/useBrands";
import {
  createBrandThunk,
  getAllBrandsThunk,
  updateBrandThunk,
  deleteBrandThunk,
} from "../../../../store/thunks/brands/brandsThunk";
import { useAppDispatch } from "../../../../store/hooks/app";
import { IBrand } from "../../../../common/types/brand/brandTypes";
import { INavigationItem } from "../../../../common/types/table/toolbarTypes";

interface IBrandsTableProps {
  navigationValue: number;
  navigationItems: INavigationItem[];
  onNavigationChange: (value: number) => void;
}

const BrandsTable: React.FC<IBrandsTableProps> = ({
  navigationValue,
  navigationItems,
  onNavigationChange,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const fetchBrandsRef = useRef(false);

  const fetchData = useCallback(() => {
    dispatch(getAllBrandsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (fetchBrandsRef.current) return;

    fetchData();

    fetchBrandsRef.current = true;
  }, [fetchData]);

  // Функция для создания продукта
  const createBrand = async (
    newBrandData: Omit<IBrand, "id">
  ): Promise<IBrand> => {
    const result = await dispatch(createBrandThunk(newBrandData));
    if (result.meta.requestStatus === "rejected") {
      throw new Error(result.payload as string);
    }
    return result.payload as IBrand;
  };

  // Функция для обновления продукта
  const updateBrand = async (updatedBrandData: IBrand): Promise<IBrand> => {
    const result = await dispatch(updateBrandThunk(updatedBrandData));
    if (result.meta.requestStatus === "rejected") {
      throw new Error(result.payload as string);
    }
    return result.payload as IBrand;
  };

  // Функция для удаления продукта
  const deleteBrand = async (brandId: number): Promise<void> => {
    const result = await dispatch(deleteBrandThunk(brandId));
    if (result.meta.requestStatus === "rejected") {
      throw new Error(result.payload as string);
    }
  };

  const { brands, isBrandsLoading } = useBrands();

  const getRequiredColumns = () => {
    const baseRequiredColumns = ["name"];
    return baseRequiredColumns;
  };

  const tableOptions: ITableOptions<IBrand> = {
    name: "Бренды",
    table: "brands",
    columns: brandColumns(),
    requiredColumns: getRequiredColumns, // Список обязательных колонок
    data: brands,
    pageSize: 20,
    pageSizeOptions: [15, 20, 50, 100],
    rowHeight: 42,
    isLoading: isBrandsLoading,
    fieldsInitial: {
      name: "",
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
    <DataTable<IBrand>
      tableOptions={tableOptions}
      createFunction={createBrand}
      updateFunction={updateBrand}
      deleteFunction={deleteBrand}
    />
  );
};

export default BrandsTable;
