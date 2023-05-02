import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import useStyles from './styles';

const Loader: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.loader}>
      <CircularProgress />
    </div>
  );
}

export default Loader;
