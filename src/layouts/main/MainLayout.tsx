import React from 'react';
import Header from '../header/Header';
import useStyles from './styles';

type MainLayoutProps = {
  children: React.ReactNode,
  showHeader?: boolean,
};

const MainLayout: React.FC<MainLayoutProps> = ({children, showHeader}) => {
  const styles = useStyles();

  return (
    <div className={styles.body}>
      {showHeader && <Header />}
      <main className={styles.main}>
        <div className={styles.container}>
          {children}
        </div>
      </main>
    </div>
  )
}

export default MainLayout;
