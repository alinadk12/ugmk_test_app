import React, { useCallback, useEffect, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { SelectChangeEvent } from '@mui/material/Select';

import Loader from 'src/components/ui/atoms/loader/Loader';
import Card from 'src/components/ui/atoms/card/Card';
import NoData from 'src/components/ui/molecules/placeholders/noData/NoData';
import { ProductTypes } from 'src/modules/products/domain/enums/products';
import ProductTypeSelect from 'src/modules/products/presentation/list/view/components/productTypeSelect/ProductTypeSelect';
import { useProductListContext } from 'src/modules/products/presentation/list/provider';
import { getChartData } from 'src/modules/products/presentation/list/utils/chartData';

import MonthlyChart from './components/MonthlyChart';

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
      {vm.isLoading ? <Loader /> : <MonthlyChart data={chartData} /> }
    </>
  );
}

export default observer(ListView);
