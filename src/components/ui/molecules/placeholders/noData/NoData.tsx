import React from 'react';

import TextH4 from 'src/components/ui/atoms/text/TextH4';
import Card from 'src/components/ui/atoms/card/Card';

import styles from './NoData.module.css';

type NoDataProps = {
  children: React.ReactNode;
};

const NoData: React.FC<NoDataProps> = ({ children }) => {
  return (
    <Card>
      <div className={styles.wrapper}>
        <TextH4>{children}</TextH4>
      </div>
    </Card>
  );
}

export default NoData;
