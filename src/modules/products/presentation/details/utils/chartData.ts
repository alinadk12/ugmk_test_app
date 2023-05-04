import { Product } from '../../../domain/models/Product';
import { IChartData } from '../interfaces/IChartData';
import { MONTH_RANGE } from '../../../../../constants/date';

export const getChartData = (data: Product[], factoryId: number, monthNumber: number): IChartData => {
  const result: IChartData = {
    factoryId,
    month: MONTH_RANGE[monthNumber - 1],
    product1: 0,
    product2: 0,
  };

  data.forEach((item) => {
    result.product1 += item.product1;
    result.product2 += item.product2;
  });

  return result;
}
