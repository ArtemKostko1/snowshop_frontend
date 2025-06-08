import { SxProps } from '@mui/material';

const card: SxProps = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  background: 'none',
  border: 'none',
  boxShadow: 'none',
  transition: 'box-shadow 0.2s',
  cursor: 'pointer',
  ':hover': {
    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
  },
  boxSizing: 'border-box',
};

const image: SxProps = {
  height: '250px',
  width: '100%',
  objectFit: 'contain',
  marginTop: '24px',
};

const name: SxProps = {
  fontWeight: 700,
  fontSize: 16,
  lineHeight: 1.3,
  height: '62px',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  margin: '8px 0',
  textAlign: 'left',
};

const infoRow: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 'auto',
  padding: '8px 0',
};

const price: SxProps = {
  fontWeight: 500,
  color: '#222',
  fontSize: 16,
};

const inStock = (inStock: boolean): SxProps => ({
  fontWeight: 400,
  color: inStock ? '#4caf50' : '#f44336',
  fontSize: 14,
});

const styles = {
  card,
  image,
  name,
  infoRow,
  price,
  inStock,
};

export default styles;
