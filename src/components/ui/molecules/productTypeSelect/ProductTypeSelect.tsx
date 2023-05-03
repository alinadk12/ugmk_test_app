import React from 'react';
import Select from '../../atoms/select/Select';
import Text from '../../atoms/text/Text';
import { options } from './options';
import useStyles from './styles';

const ProductTypeSelect: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <Text>Фильтр по типу продукции</Text>
      <Select
        id="productType"
        value="all"
        options={options}
      />
    </div>
  );
}

export default ProductTypeSelect;
