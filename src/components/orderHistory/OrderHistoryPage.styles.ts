import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: '24px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    marginBottom: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ordersContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  emptyState: {
    textAlign: 'center',
    padding: '48px 0',
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '48px 0',
  },
}));
