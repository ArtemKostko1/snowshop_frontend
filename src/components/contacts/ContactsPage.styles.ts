import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  pageTitle: {
    marginBottom: '24px !important',
    fontWeight: 600,
    position: 'relative',
  },
  card: {
    borderRadius: 8,
    border: '1px solid #e0e0e0',
    height: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  mapCard: {
    borderRadius: 8,
    border: '1px solid #e0e0e0',
    height: '100%',
  },
  sectionTitle: {
    fontWeight: 600,
    position: 'relative',
    paddingLeft: 12,
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      height: '80%',
      width: 4,
      backgroundColor: '#4dc6cb',
      borderRadius: 4,
    },
  },
  divider: {
    margin: '24px 0',
  },
  mapContainer: {
    width: '100%',
    height: 250,
    marginTop: 16,
  },
  mapPlaceholder: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    border: '1px dashed #bdbdbd',
  },
  messengerBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    transition: 'transform 0.2s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  footerBox: {
    marginTop: 48,
    padding: 24,
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    color: '#00363a',
  },
}));
