import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import forEach from 'lodash/forEach';

import { DATE_FORMAT } from 'src/constants/date';
import { KG_IN_TON } from 'src/constants/units';
import { Product } from 'src/modules/products/domain/models/Product';
import { IChartData } from 'src/modules/products/presentation/list/interfaces/IChartData';

dayjs.extend(customParseFormat);

export const getChartData = (data: Product[]): IChartData => {
  const result: IChartData = {};

  forEach(data, (item) => {
    if (item.date === null) return;

    if (!result[item.factory_id]) {
      result[item.factory_id] = (new Array(12)).fill(0);
    }

    result[item.factory_id][dayjs(item.date, DATE_FORMAT).get('month')] += item.product1 + item.product2 + item.product3;
  });

  forEach(result, (factory, id) => {
    result[+id] = factory.map((monthSum) => Math.round(monthSum / KG_IN_TON));
  });

  return result;
}
