import dayjs from 'dayjs';
import { Product } from '../../domain/models/Product';
import { IChartData } from '../list/interfaces/IChartData';
import { DATE_FORMAT } from '../list/constants';

import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

export const getChartData = (data: Product[]): IChartData => {
  const result: IChartData = {};

  data.forEach((item) => {
    if (item.date === null) return;

    if (!result[item.factory_id]) {
      result[item.factory_id] = (new Array(12)).fill(0);
    }

    result[item.factory_id][dayjs(item.date, DATE_FORMAT).get('month')] += item.product1 + item.product2 + item.product3;
  });

  return result;
}
