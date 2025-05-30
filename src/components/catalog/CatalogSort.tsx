import React from "react";
import { SortType, sortOptions } from "../../common/types/sorting/sortTypes";
import SelectDefault from "../_common/select/SelectDefault";

interface CatalogSortProps {
  value: SortType;
  onChange: (value: SortType) => void;
  isCatalogProductsLoading: boolean;
}

const CatalogSort: React.FC<CatalogSortProps> = ({
  value,
  onChange,
  isCatalogProductsLoading,
}) => {
  return (
    <SelectDefault
      label=""
      value={value}
      options={sortOptions}
      onChange={(e) => onChange(e.target.value as SortType)}
      disabled={isCatalogProductsLoading}
      width="200px"
    />
  );
};

export default CatalogSort;
