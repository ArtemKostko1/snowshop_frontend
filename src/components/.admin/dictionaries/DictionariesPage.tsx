import React, { useCallback, useState } from "react";
import { useStyles } from "./DictionariesPage.styles";
import CategoriesTable from "./CategoriesTable/CategoriesTable";
import BrandsTable from "./BrandTable/BrandTable";
import { INavigationItem } from "../../../common/types/table/toolbarTypes";

const navigationItems: INavigationItem[] = [
  { label: "Категории", value: 0 },
  { label: "Бренды", value: 1 },
];

const DictionariesPage: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const [navigationValue, setNavigationValue] = useState(0);

  const renderTable = () => {
    switch (navigationValue) {
      case 0:
        return (
          <CategoriesTable
            navigationValue={navigationValue}
            navigationItems={navigationItems}
            onNavigationChange={setNavigationValue}
          />
        );
      case 1:
        return (
          <BrandsTable
            navigationValue={navigationValue}
            navigationItems={navigationItems}
            onNavigationChange={setNavigationValue}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={classes.dictionariesPageContainer}>
      <div className={classes.tableContainer}>{renderTable()}</div>
    </div>
  );
};

export default DictionariesPage;
