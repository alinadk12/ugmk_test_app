import React, { useMemo } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import merge from 'lodash/merge';

type ChartProps = HighchartsReact.Props;

const Chart: React.FC<ChartProps> = (props) => {
  const { options, ...rest } = props;

  const defaultOptions = {
    title: {
      text: ''
    },
    xAxis: {
      title: {
        text: ''
      }
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    plotOptions: {
      pie: {
        cursor: 'pointer',
        showInLegend: true,
        dataLabels: {
          connectorWidth: 0,
          formatter: function () {
            return (
              '<span style="color: ' + this.color + '">' + this.y + '</span>'
            );
          }
        },
      },
      column: {
        cursor: 'pointer',
      }
    },
    legend: {
      symbolRadius: 0,
      labelFormatter: function() {
        return '<span style="color: '+this.color+'">'+ this.name + '</span>';
      }
    },
    accessibility: {
      enabled: false,
    },
  } as Highcharts.Options;

  const fullOptions = useMemo(() => merge(defaultOptions, options), [options]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={fullOptions}
      {...rest}
    />
  );
}

export default Chart;
