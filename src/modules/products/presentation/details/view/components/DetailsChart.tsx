import React, { useMemo } from 'react';
import Highcharts from 'highcharts';
import green from '@mui/material/colors/green';
import amber from '@mui/material/colors/amber';
import TextH4 from 'src/components/ui/atoms/text/TextH4';
import Chart from 'src/components/ui/organisms/chart/Chart';
import Loader from 'src/components/ui/atoms/loader/Loader';
import { ProductNames } from '../../../../domain/enums/products';
import { FactoryIds, FactoryNames } from '../../../../domain/enums/factory';
import { IChartData } from '../../interfaces/IChartData';
import useStyles from './styles';

type DetailsChartProps = {
  isLoading: boolean,
  data: IChartData,
}

const DetailsChart: React.FC<DetailsChartProps> = ({ data, isLoading }) => {
  const styles = useStyles();

  const options = useMemo(() => (
    {
      chart: {
        type: 'pie',
      },
      series: [{
        name: 'Продукты',
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