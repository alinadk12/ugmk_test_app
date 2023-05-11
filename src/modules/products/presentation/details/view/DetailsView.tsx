import React, { useEffect, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

import NoData from 'src/components/ui/molecules/placeholders/noData/NoData';
import { useProductDetailsContext } from 'src/modules/products/presentation/details/provider';
import { getChartData } from 'src/modules/products/presentation/details/utils/chartData';

import DetailsChart from './components/DetailsChart';


const DetailsView: React.FC = () => {
  const vm = useProductDetailsContext();

  let { factoryId, month } = useParams();

  const factory = parseInt(factoryId || '-1');
  const monthNumber = parseInt(month || '-1');

  useEffect(() => {
    (async () => {
      await vm.getDetails(factory, monthNumber);
    })();
  }, [vm, factory, monthNumber])

  const chartData = useMemo(() => getChartData(vm.products, factory, monthNumber), [vm.products, factory, monthNumber]);

  if (vm.products.length === 0 && !vm.isLoading) {
    return <NoData>Нет данных</NoData>;
  }

  return (
    <DetailsChart data={chartData} isLoading={vm.isLoading} />
  );
}

export default observer(DetailsView);
