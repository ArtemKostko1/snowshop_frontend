import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  pageTitle: {
    marginBottom: '24px !important',
    fontWeight: 600,
    position: 'relative',
  },
  card: {
    height: '100%',
    borderRadius: 8,
    border: '1px solid #e0e0e0',
    '& .MuiCardContent-root:last-child': {
      paddingBottom: 16,
      marginBottom: 0,
    },
  },
  cardHeader: {
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  noteBox: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
  },
  note: {
    fontStyle: 'italic',
  },
  additionalInfo: {
    marginTop: 16,
    fontWeight: 500,
  },
  contactBox: {
    backgroundColor: '#e0f7fa',
    padding: 24,
    borderRadius: 8,
    color: '#00363a',
    textAlign: 'center',
  },
}));
