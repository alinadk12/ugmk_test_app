import React from 'react';
import BackButton from 'src/components/ui/molecules/buttons/backButton/BackButton';
import useStyles from './styles';

const Header: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <BackButton />
    </div>
  );
}

export default Header;
