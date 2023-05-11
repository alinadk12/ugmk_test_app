import React from 'react';
import { SelectChangeEvent } from '@mui/material/Select';

import Select from 'src/components/ui/atoms/select/Select';
import Text from 'src/components/ui/atoms/text/Text';
import { ProductTypes } from 'src/modules/products/domain/enums/products';

import { options } from './options';
import styles from './ProductTypeSelect.module.css';

type ProductTypeSelectProps = {
  value: ProductTypes,
  disabled: boolean,
  onChange: (event: SelectChangeEvent) => void,
};

const ProductTypeSelect: React.FC<ProductTypeSelectProps> = ({ value, disabled, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <Text>Фильтр по типу продукции</Text>
      <Select
        id="productType"
        value={value}
        disabled={disabled}
        options={options}
        onChange={onChange}
      />
    </div>
  );
}

export default ProductTypeSelect;
