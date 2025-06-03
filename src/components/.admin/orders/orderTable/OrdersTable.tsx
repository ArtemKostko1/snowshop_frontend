import React, { useCallback, useEffect, useRef } from 'react';
import DataTable from '../../../_common/dataTable/dataTable';
import { orderColumns } from './tableColumns';
import { ITableOptions } from '../../../../common/types/table/tableTypes';
import { IProduct } from '../../../../common/types/product/productTypes';
import { useProducts } from '../../../../store/hooks/products/useProducts';
import { useBrands } from '../../../../store/hooks/brands/useBrands';
import { useCategories } from '../../../../store/hooks/categories/useCategories';
import { deleteProductThunk } from '../../../../store/thunks/products/productsThunk';
import { getAllBrandsThunk } from '../../../../store/thunks/brands/brandsThunk';
import { getAllCategoriesThunk } from '../../../../store/thunks/categories/categoriesThunk';
import { useAppDispatch } from '../../../../store/hooks/app';
import {
  createProductThunk,
  updateProductThunk,
  getAllProductsThunk,
} from '../../../../store/thunks/products/productsThunk';
import { getAllOrdersThunk, updateOrderThunk } from '../../../../store/thunks/orders/ordersThunk';
import { useOrders } from '../../../../store/hooks/products copy/useOrders';
import { IOrder } from '../../../../common/types/order/orderTypes';

const OrdersTable: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const fetchOrdersRef = useRef(false);

  const fetchData = useCallback(() => {
    dispatch(getAllOrdersThunk());
  }, [dispatch]);

  useEffect(() => {
    if (fetchOrdersRef.current) return;

    fetchData();

    fetchOrdersRef.current = true;
  }, [fetchData]);

  const { orders, isOrdersLoading } = useOrders();

  const updateOrder = async (updatedOrderData: IOrder): Promise<IOrder> => {
    const formattedData = {
      ...updatedOrderData,
    };
    const result = await dispatch(updateOrderThunk(formattedData));
    if (result.meta.requestStatus === 'rejected') {
      throw new Error(result.payload as string);
    }
    return result.payload as IOrder;
  };

  const getRequiredColumns = () => {
    const baseRequiredColumns = [
      'id',
      'email',
      'phoneNumber',
      'status',
      'totalPrice',
      'delivery',
      'paymentMethod',
    ];
    return baseRequiredColumns;
  };

  const tableOptions: ITableOptions<IOrder> = {
    name: 'Заказы',
    table: 'orders',
    columns: orderColumns(),
    requiredColumns: getRequiredColumns,
    data: [...orders].reverse(),
    pageSize: 20,
    pageSizeOptions: [15, 20, 50, 100],
    rowHeight: 42,
    isLoading: isOrdersLoading,
    canEdit: true,
    canDelete: false,
    canAdd: false,
    defaultSort: [
      {
        field: 'createdAt',
        sort: 'desc',
      },
    ],
  };

  return <DataTable<IOrder> tableOptions={tableOptions} updateFunction={updateOrder} />;
};

export default OrdersTable;
