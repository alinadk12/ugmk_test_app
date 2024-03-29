import { OptionType } from 'src/components/ui/atoms/select/Select';
import { ProductTypes } from 'src/modules/products/domain/enums/products';

export const options: OptionType[] = [
  { label: 'Все продукты', value: ProductTypes.ALL },
  { label: 'Продукт 1', value: ProductTypes.PRODUCT_1 },
  { label: 'Продукт 2', value: ProductTypes.PRODUCT_2 },
  { label: 'Продукт 3', value: ProductTypes.PRODUCT_3 },
];
