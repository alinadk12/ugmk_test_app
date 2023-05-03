import React from 'react';
import Highcharts from 'highcharts';
import red from '@mui/material/colors/red';
import indigo from '@mui/material/colors/indigo';
import Card from 'src/components/ui/atoms/card/Card';
import Chart from 'src/components/ui/organisms/chart/Chart';
import { MONTH_RANGE } from '../../constants';
import { FactoryIds, FactoryNames } from '../../enums/factory';
import { IChartData } from '../../interfaces/IChartData';

type MonthlyChartProps = {
  data: IChartData,
};

const MonthlyChart: React.FC<MonthlyChartProps> = ({ data }) => {
  const options = {
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
  } as Highcharts.Options;

  return (
    <Card>
      <Chart options={options} />
    </Card>
  );
}

export default MonthlyChart;
