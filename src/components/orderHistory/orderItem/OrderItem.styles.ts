import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  orderCard: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  orderHeader: {
    padding: '16px',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #e0e0e0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderNumber: {
    fontWeight: 'bold',
  },
  orderStatus: {
    padding: '4px 12px',
    borderRadius: '16px',
    fontSize: '0.875rem',
    fontWeight: 'medium',
    textTransform: 'capitalize',
  },
  statusPending: {
    backgroundColor: '#fff8e1',
    color: '#f57f17',
  },
  statusProcessing: {
    backgroundColor: '#e3f2fd',
    color: '#1565c0',
  },
  statusShipped: {
    backgroundColor: '#e8f5e9',
    color: '#2e7d32',
  },
  statusDelivered: {
    backgroundColor: '#e8f5e9',
    color: '#2e7d32',
  },
  statusCancelled: {
    backgroundColor: '#fbe9e7',
    color: '#c62828',
  },
  productsContainer: {
    padding: '16px',
  },
  productDivider: {
    margin: '12px 0',
  },
  orderFooter: {
    padding: '16px',
    backgroundColor: '#f5f5f5',
    borderTop: '1px solid #e0e0e0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  orderInfoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  totalPrice: {
    fontWeight: 'bold',
    fontSize: '1.125rem',
  },
  orderDate: {
    color: '#757575',
    fontSize: '0.875rem',
  },
}));
