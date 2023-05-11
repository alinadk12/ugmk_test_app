import React, { useMemo } from 'react';
import Highcharts from 'highcharts';
import { useNavigate } from 'react-router-dom';
import red from '@mui/material/colors/red';
import indigo from '@mui/material/colors/indigo';

import Card from 'src/components/ui/atoms/card/Card';
import Chart from 'src/components/ui/organisms/chart/Chart';
import { MONTH_RANGE } from 'src/constants/date';
import { FactoryIds, FactoryNames } from 'src/modules/products/domain/enums/factory';
import { IChartData } from 'src/modules/products/presentation/list/interfaces/IChartData';

type MonthlyChartProps = {
  data: IChartData,
};

const MonthlyChart: React.FC<MonthlyChartProps> = ({ data }) => {
  const navigate = useNavigate();

  const handleColumnClick = (category: string | number, factoryId: number) => {
    const month = MONTH_RANGE.findIndex((item) => item === category);

    if (month !== -1) {
      navigate(`/details/${factoryId}/${month + 1}`);
    }
  }

  const options = useMemo(() => (
    {
      chart: {
        type: 'column',
      },
      xAxis: {
        categories: MONTH_RANGE,
      },
      series: [{
        name: `Фабрика ${FactoryNames.FACTORY_A}`,
        data: data[FactoryIds.FACTORY_A],
        color: red[500],
        events: {
          click: ({ point: { category } }) => handleColumnClick(category, FactoryIds.FACTORY_A),
        }
      }, {
        name: `Фабрика ${FactoryNames.FACTORY_B}`,
        data: data[FactoryIds.FACTORY_B],
        color: indigo[500],
        events: {
          click: ({ point: { category } }) => handleColumnClick(category, FactoryIds.FACTORY_B),
        }
      }],
    } as Highcharts.Options
  ), [data]);

  return (
    <Card>
      <Chart options={options} />
    </Card>
  );
}

export default MonthlyChart;
