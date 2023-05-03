import React, { useMemo } from 'react';
import Highcharts from 'highcharts';
import red from '@mui/material/colors/red';
import indigo from '@mui/material/colors/indigo';
import Card from 'src/components/ui/atoms/card/Card';
import Chart from 'src/components/ui/organisms/chart/Chart';
import Loader from 'src/components/ui/atoms/loader/Loader';
import { MONTH_RANGE } from '../../constants';
import { FactoryIds, FactoryNames } from '../../../../domain/enums/factory';
import { IChartData } from '../../interfaces/IChartData';

type MonthlyChartProps = {
  data: IChartData,
  isLoading: boolean,
};

const MonthlyChart: React.FC<MonthlyChartProps> = ({ data, isLoading }) => {
  const options = useMemo(() => (
    {
      chart: {
        type: 'column',
      },
      xAxis: {
        categories: MONTH_RANGE,
      },
      series: [{
        name: FactoryNames.FACTORY_A,
        data: data[FactoryIds.FACTORY_A],
        color: red[500],
      }, {
        name: FactoryNames.FACTORY_B,
        data: data[FactoryIds.FACTORY_B],
        color: indigo[500]
      }],
    } as Highcharts.Options
  ), [data]);

  return (
    <Card>
      {isLoading ? <Loader /> : <Chart options={options} />}
    </Card>
  );
}

export default MonthlyChart;
