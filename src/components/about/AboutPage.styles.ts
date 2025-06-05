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
  },
  slogan: {
    textAlign: 'center',
    fontWeight: 700,
    color: '#4dc6cb',
    marginTop: 24,
    letterSpacing: 1,
  },
  iconTitleBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontWeight: 600,
  },
  divider: {
    margin: '16px 0 !important',
  },
  timelineContainer: {
    position: 'relative',
    marginTop: 24,
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 18,
      top: 0,
      bottom: 0,
      width: 2,
      backgroundColor: '#e0e0e0',
    },
  },
  timelineItem: {
    position: 'relative',
    paddingLeft: 40,
    marginBottom: 24,
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 9,
      top: 6,
      width: 14,
      height: 14,
      borderRadius: '50%',
      backgroundColor: '#4dc6cb',
      border: '3px solid #ffffff',
      zIndex: 1,
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
  footerBox: {
    padding: 32,
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    color: '#00363a',
  },
}));
