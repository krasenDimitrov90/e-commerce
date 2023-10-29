import React from 'react';

import { ButtonTypes, ProductItemType } from './components-renderer';
import { CategoriesLeftMenu } from './modules';

const Menu = () => {
  return (
    <div className='flex-1 flex basis-1/4 p-2'>
      <div className='flex-1 bg-gray-300 p-4'>
        MENU
      </div>
    </div>
  );
};

function App() {

  return (
    <>
      {/* <ButtonTypes /> */}
      <div className='flex'>
        <CategoriesLeftMenu />
        <ProductItemType />
      </div>
    </>
  );
}

export default App;
