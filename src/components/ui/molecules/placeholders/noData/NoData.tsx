import React from 'react';
import TextH4 from 'src/components/ui/atoms/text/TextH4';
import Card from '../../../atoms/card/Card';
import useStyles from './styles';

type NoDataProps = {
  children: React.ReactNode;
};

const NoData: React.FC<NoDataProps> = ({ children }) => {
  const styles = useStyles();

  return (
    <Card>
      <div className={styles.wrapper}>
        <TextH4>{children}</TextH4>
      </div>
    </Card>
  );
}

export default NoData;
