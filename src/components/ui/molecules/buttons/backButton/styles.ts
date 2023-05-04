import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import grey from '@mui/material/colors/grey';

const useStyles = makeStyles<Theme>({
  wrapper: {
    position: 'absolute',
    left: '10px',

    '& > button': {
      color: grey[900]
    },
  },
  text: {
    marginLeft: '4px',
  }
});

export default useStyles;
