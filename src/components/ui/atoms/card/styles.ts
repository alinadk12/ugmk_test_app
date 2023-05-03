import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import grey from '@mui/material/colors/grey';

const useStyles = makeStyles<Theme>({
  wrapper: {
    border: `2px solid ${grey[900]}`,
    borderRadius: '10px',
    padding: '16px',
    marginBottom: '24px',
    overflow: 'auto',
  }
});

export default useStyles;
