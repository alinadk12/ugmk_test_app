import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles<Theme>((theme) => ({
  body: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },

  main: {
    padding: '24px',

    [theme.breakpoints.between('sm', 'md')]: {
      padding: '16px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '6px',
    },
  },

  container: {
    maxWidth: '960px',
    margin: '0 auto',

    [theme.breakpoints.between('sm', 'md')]: {
      maxWidth: '720px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '96%',
    },
  }
}));

export default useStyles;
