import React from "react";
import { SortType, sortOptions } from "../../common/types/product/sortTypes";

interface CatalogSortProps {
  value: SortType;
  onChange: (value: SortType) => void;
}

const CatalogSort: React.FC<CatalogSortProps> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="sort-select">Сортировка:</label>
      <select
        id="sort-select"
        value={value}
        onChange={(e) => onChange(e.target.value as SortType)}
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CatalogSort;
