import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: 16,
    borderBottom: '1px solid #e0e0e0',
    boxShadow: 'none',
  },
  lastItem: {
    borderBottom: 'none',
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  placeholderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  placeholderIcon: {
    fontSize: 64,
    color: '#bdbdbd',
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  boldText: {
    fontWeight: 'bold',
  },
  quantityContainer: {
    marginTop: 16,
  },
}));
