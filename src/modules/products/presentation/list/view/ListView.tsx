import React, { useEffect, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import Card from 'src/components/ui/atoms/card/Card';
import ProductTypeSelect from 'src/components/ui/molecules/productTypeSelect/ProductTypeSelect';
import NoData from 'src/components/ui/molecules/placeholders/noData/NoData';
import { useProductListContext } from '../provider';
import { getChartData } from '../../utils/chartData';
import MonthlyChart from './components/MonthlyChart';

const ListView: React.FC = () => {
  const vm = useProductListContext();

  useEffect(() => {
    (async () => {
      await vm.getProductsList();
    })();
  }, [vm]);

  const chartData = useMemo(() => getChartData(vm.products), [vm.products]);

  return (
    <>
      <Card>
        <ProductTypeSelect />
      </Card>
      {vm.products.length ? <MonthlyChart data={chartData} /> : <NoData>Нет данных</NoData>}
    </>
  );
}

export default observer(ListView);
