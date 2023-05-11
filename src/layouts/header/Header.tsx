import React from 'react';

import BackButton from 'src/components/ui/molecules/buttons/backButton/BackButton';

import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.wrapper}>
      <BackButton />
    </header>
  );
}

export default Header;
