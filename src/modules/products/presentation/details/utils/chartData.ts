import { MONTH_RANGE } from 'src/constants/date';
import { KG_IN_TON } from 'src/constants/units';
import { Product } from 'src/modules/products/domain/models/Product';
import { IChartData } from 'src/modules/products/presentation/details/interfaces/IChartData';

export const getChartData = (data: Product[], factoryId: number, monthNumber: number): IChartData => {
  let product1Sum = 0;
  let product2Sum = 0;
  let product3Sum = 0;

  data.forEach((item) => {
    product1Sum += item.product1 / KG_IN_TON;
    product2Sum += item.product2 / KG_IN_TON;
    product3Sum += item.product3 / KG_IN_TON;
  });

  return {
    factoryId,
    month: MONTH_RANGE[monthNumber - 1],
    product1: Math.round(product1Sum),
    product2: Math.round(product2Sum),
    product3: Math.round(product3Sum),
  };
}
