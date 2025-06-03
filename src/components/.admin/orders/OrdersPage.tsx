import React, { useCallback } from "react";
import OrdersTable from "./orderTable/OrdersTable";
import { useStyles } from "./OrdersPage.styles";

const OrdersPage: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.productsPageContainer}>
      <div className={classes.productTable}>
        <OrdersTable />
      </div>
    </div>
  );
};

export default OrdersPage;
