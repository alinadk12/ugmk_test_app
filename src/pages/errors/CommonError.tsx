import React from 'react';

import styles from './Error.module.css';

const CommonError: React.FC = () => {
  return (
    <div className={styles.wrapper}>Что-то пошло не так...</div>
  );
}

export default CommonError;
