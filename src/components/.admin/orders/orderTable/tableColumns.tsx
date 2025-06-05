import { GridColDef } from '@mui/x-data-grid';
import React from 'react';

export const orderColumns = (): GridColDef[] => {
  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      type: 'number',
      align: 'center',
      headerAlign: 'center',
      width: 70,
    },
    {
      field: 'status',
      headerName: 'Статус',
      type: 'singleSelect',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      minWidth: 120,
      editable: true,
      valueOptions: [
        { value: 'pending', label: 'Ожидает' },
        { value: 'processing', label: 'В обработке' },
        { value: 'completed', label: 'Завершен' },
        { value: 'cancelled', label: 'Отменен' },
      ],
      renderCell: (params) => {
        const status = params.value as string;
        let color = '';
        let text = '';

        switch (status) {
          case 'pending':
            color = '#FFE0B2'; // оранжевый
            text = 'Ожидает';
            break;
          case 'processing':
            color = '#BBDEFB'; // синий
            text = 'В обработке';
            break;
          case 'completed':
            color = '#C8E6C9'; // зеленый
            text = 'Завершен';
            break;
          case 'cancelled':
            color = '#FFCDD2'; // красный
            text = 'Отменен';
            break;
          default:
            color = '#E0E0E0'; // серый
            text = status;
        }

        return (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: color,
              color: '#333',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              lineHeight: '24px',
              boxSizing: 'border-box',
            }}
          >
            {text}
          </div>
        );
      },
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'string',
      align: 'left',
      headerAlign: 'center',
      flex: 1,
      minWidth: 200,
    },
    {
      field: 'phoneNumber',
      headerName: 'Телефон',
      type: 'string',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'totalPrice',
      headerName: 'Сумма',
      type: 'number',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      minWidth: 100,
      renderCell: (params) => {
        return `${params.value.toFixed(2)} BYN`;
      },
    },
    {
      field: 'delivery',
      headerName: 'Доставка',
      type: 'string',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      minWidth: 120,
      renderCell: (params) => {
        const delivery = params.value as string;
        return delivery === 'pickup' ? 'Самовывоз' : 'Доставка';
      },
    },
    {
      field: 'paymentMethod',
      headerName: 'Оплата',
      type: 'string',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      minWidth: 120,
      renderCell: (params) => {
        const payment = params.value as string;
        return payment === 'card' ? 'Картой' : 'Наличными';
      },
    },
    {
      field: 'comment',
      headerName: 'Комментарий',
      type: 'string',
      align: 'left',
      headerAlign: 'center',
      flex: 1,
      minWidth: 200,
    },
    {
      field: 'createdAt',
      headerName: 'Дата создания',
      type: 'string',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      minWidth: 180,
      renderCell: (params) => {
        if (!params.value) return '';
        const date = new Date(params.value);
        return formatDate(date);
      },
    },
    {
      field: 'updatedAt',
      headerName: 'Дата обновления',
      type: 'string',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      minWidth: 180,
      renderCell: (params) => {
        if (!params.value) return '';
        const date = new Date(params.value);
        return formatDate(date);
      },
    },
  ];

  return columns;
};

// Функция для форматирования даты в формате DD.MM.YYYY HH:MM:SS
const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
};
