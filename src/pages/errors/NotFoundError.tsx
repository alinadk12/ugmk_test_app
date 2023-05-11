import React from 'react';

import styles from './Error.module.css';

const NotFoundError: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Страница не найдена!</h1>
    </div>
  );
}

export default NotFoundError;
