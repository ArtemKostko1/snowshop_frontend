import React, { useCallback, useEffect, useRef, useState } from 'react';
import DataTable from '../../../_common/dataTable/dataTable';
import { orderColumns } from './tableColumns';
import { ITableOptions } from '../../../../common/types/table/tableTypes';
import { useAppDispatch } from '../../../../store/hooks/app';
import { getAllOrdersThunk, updateOrderThunk } from '../../../../store/thunks/orders/ordersThunk';
import { useOrders } from '../../../../store/hooks/orders/useOrders';
import { IOrder } from '../../../../common/types/order/orderTypes';
import OrderProductModal from './orderProductModal/OrderProductModal';

const OrdersTable: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleViewOrderProducts = (orderId: number) => {
    const order = orders.find((o) => o.id === orderId);
    if (order) {
      setSelectedOrder(order);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
    customActions: {
      viewOrderProducts: handleViewOrderProducts,
    },
  };

  return (
    <>
      <DataTable<IOrder> tableOptions={tableOptions} updateFunction={updateOrder} />
      <OrderProductModal open={isModalOpen} onClose={handleCloseModal} order={selectedOrder} />
    </>
  );
};

export default OrdersTable;
