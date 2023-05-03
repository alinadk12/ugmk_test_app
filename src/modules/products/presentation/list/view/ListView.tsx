import React, { useCallback, useEffect, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { SelectChangeEvent } from '@mui/material/Select';
import Card from 'src/components/ui/atoms/card/Card';
import ProductTypeSelect from 'src/modules/products/presentation/list/view/components/productTypeSelect/ProductTypeSelect';
import NoData from 'src/components/ui/molecules/placeholders/noData/NoData';
import { useProductListContext } from '../provider';
import { getChartData } from '../utils/chartData';
import MonthlyChart from './components/MonthlyChart';
import { ProductTypes } from '../../../domain/enums/products';

const ListView: React.FC = () => {
  const vm = useProductListContext();

  useEffect(() => {
    (async () => {
      await vm.getProductsList();
    })();
  }, [vm]);

  const chartData = useMemo(() => getChartData(vm.products), [vm.products]);

  const handleProductTypeSelect = useCallback(async (event: SelectChangeEvent) => {
    await vm.changeProductType(event.target.value as ProductTypes);
  }, [vm]);

  if (vm.products.length === 0 && !vm.isLoading) {
    return <NoData>Нет данных</NoData>;
  }

  return (
    <>
      <Card>
        <ProductTypeSelect onChange={handleProductTypeSelect} value={vm.productType} disabled={vm.isLoading} />
      </Card>
      <MonthlyChart data={chartData} isLoading={vm.isLoading} />
    </>
  );
}

export default observer(ListView);
