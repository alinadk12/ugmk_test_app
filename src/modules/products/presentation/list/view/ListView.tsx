import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useProductListContext } from '../provider';

const ListView: React.FC = () => {
  const vm = useProductListContext();

  useEffect(() => {
    (async () => {
      await vm.getProductsList();
    })();
  }, [vm]);

  console.log(vm.products);

  return (
    <div>List View</div>
  );
}

export default observer(ListView);
