import React from 'react';

import { ButtonTypes, ProductItemType } from './components-renderer';

const Menu = () => {
  return (
    <div className='flex-1 basis-1/4'>
      MENU
    </div>
  );
};

function App() {

  return (
    <>
      {/* <ButtonTypes /> */}
      <div className='flex'>
        <Menu />
        <ProductItemType />
      </div>
    </>
  );
}

export default App;
