import React from 'react';
import BackButton from 'src/components/ui/molecules/buttons/backButton/BackButton';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <BackButton />
    </div>
  );
}

export default Header;
