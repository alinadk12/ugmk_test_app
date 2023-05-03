import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles<Theme>({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',

    '& > div': {
      marginLeft: '8px'
    }
  }
});

export default useStyles;
