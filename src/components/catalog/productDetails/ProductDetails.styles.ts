import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  imageBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    minHeight: 500,
  },
  imageCarousel: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  productImage: {
    width: 320,
    height: 400,
    objectFit: 'cover',
    borderRadius: 8,
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
  },
  arrowBtn: {
    background: '#f5f5f5',
    '&:hover': {
      background: '#e0e0e0',
    },
  },
  infoBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    justifyContent: 'flex-start',
  },
  productName: {
    fontWeight: 700,
  },
  productArticle: {
    color: '#888',
  },
  sizeBlock: {
    marginTop: '8px',
  },
  sizeButtons: {
    display: 'flex',
    gap: '8px',
    marginTop: '8px',
  },
  sizeBtn: {
    minWidth: 40,
    minHeight: 36,
    fontWeight: 500,
  },
  priceRow: {
    marginTop: '16px',
  },
  inStock: {
    color: '#43a047',
    fontWeight: 600,
    textAlign: 'end',
  },
  preOrder: {
    color: '#e53935',
    fontWeight: 600,
    textAlign: 'end',
  },
  inCart: {
    backgroundColor: '#e53935 !important',
  },
  notInCart: {
    backgroundColor: '#1975d1 !important',
  },
  description: {
    marginBottom: '8px',
  },
  internalCode: {
    color: '#aaa',
  },
  modalImageBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    background: '#fff',
    borderRadius: 8,
    boxShadow: '0 2px 16px rgba(0,0,0,0.20)',
    padding: '16px',
  },
  fullscreenImage: {
    width: 600,
    height: 800,
    objectFit: 'contain',
    borderRadius: 8,
  },
}));

export default useStyles;
