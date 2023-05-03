import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles<Theme>({
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh'
  }
});

export default useStyles;
