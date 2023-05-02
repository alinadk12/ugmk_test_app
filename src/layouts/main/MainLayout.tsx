import React from 'react';
import useStyles from './styles';

type MainLayoutProps = {
  children: React.ReactNode,
};

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  const styles = useStyles();

  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <div className={styles.container}>
          {children}
        </div>
      </main>
    </div>
  )
}

export default MainLayout;
