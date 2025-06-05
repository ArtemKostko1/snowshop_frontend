import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: '16px 0',
    display: 'flex',
    gap: '16px',
    minHeight: '120px',
  },
  imageContainer: {
    width: '120px',
    height: '120px',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  placeholderIcon: {
    fontSize: '48px',
    color: '#bdbdbd',
  },
  productInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  productName: {
    fontWeight: 'bold',
    marginBottom: '4px',
  },
  productDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  productCode: {
    color: '#757575',
    fontSize: '0.875rem',
  },
  productSize: {
    fontSize: '0.875rem',
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    minWidth: '100px',
  },
  price: {
    fontWeight: 'bold',
  },
  quantity: {
    color: '#757575',
    fontSize: '0.875rem',
  },
}));
