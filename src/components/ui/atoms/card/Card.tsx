import React from 'react';
import styles from './Card.module.css';

type CardProps = {
  children: React.ReactNode,
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <section className={styles.wrapper}>
      {children}
    </section>
  )
}

export default Card;
