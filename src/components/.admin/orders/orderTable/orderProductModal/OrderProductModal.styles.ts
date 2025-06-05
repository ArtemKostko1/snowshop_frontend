import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    minHeight: 'fit-content',
    maxHeight: 'calc(100vh - 128px)',
    height: 'auto',
    margin: '64px 0',
  },
  dialogTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
    position: 'relative',
  },
  closeButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  dialogContent: {
    padding: 24,
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 224px)', // Account for title and margins
  },
  totalContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 24,
    padding: '16px 0',
    borderTop: '1px solid #e0e0e0',
  },
}));
