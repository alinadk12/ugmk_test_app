import React from 'react';
import useStyles from './styles';

type CardProps = {
  children: React.ReactNode,
}

const Card: React.FC<CardProps> = ({ children }) => {
  const styles = useStyles();

  return (
    <section className={styles.wrapper}>
      {children}
    </section>
  )
}

export default Card;
