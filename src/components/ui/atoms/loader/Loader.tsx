import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import styles from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <CircularProgress />
    </div>
  );
}

export default Loader;
