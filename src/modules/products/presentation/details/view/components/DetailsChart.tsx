import React, { useMemo } from 'react';
import Highcharts from 'highcharts';
import green from '@mui/material/colors/green';
import amber from '@mui/material/colors/amber';
import orange from '@mui/material/colors/orange';

import TextH4 from 'src/components/ui/atoms/text/TextH4';
import Chart from 'src/components/ui/organisms/chart/Chart';
import Loader from 'src/components/ui/atoms/loader/Loader';
import { ProductNames } from 'src/modules/products/domain/enums/products';
import { FactoryIds, FactoryNames } from 'src/modules/products/domain/enums/factory';
import { IChartData } from 'src/modules/products/presentation/details/interfaces/IChartData';

import styles from './DetailsChart.module.css';

type DetailsChartProps = {
  isLoading: boolean,
  data: IChartData,
}

const DetailsChart: React.FC<DetailsChartProps> = ({ data, isLoading }) => {
  const options = useMemo(() => (
    {
      chart: {
        type: 'pie',
      },
      series: [{
        name: 'Тонны',
        colorByPoint: true,
        data: [
          {
            name: ProductNames.PRODUCT_1,
            y: data.product1,
            color: green[500]
          },
          {
            name: ProductNames.PRODUCT_2,
            y: data.product2,
            color: amber[500]
          },
          {
            name: ProductNames.PRODUCT_3,
            y: data.product3,
            color: orange[500]
          }
        ]
      }]
    } as Highcharts.Options
  ), [data]);

  return (
      <div className={styles.wrapper}>
        <TextH4>
          {`Статистика по продукции фабрики ${data.factoryId === FactoryIds.FACTORY_A ? FactoryNames.FACTORY_A : FactoryNames.FACTORY_B} за ${data.month}`}
        </TextH4>
        {isLoading ? <Loader /> : <Chart options={options} />}
      </div>
  );
}

export default DetailsChart;
