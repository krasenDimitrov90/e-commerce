import React from 'react';

import { RouterProvider, createBrowserRouter, NavLink, Outlet } from 'react-router-dom';

import { LinkButton } from './modules';
import { ButtonTypes } from './components-renderer/ButtonTypes/ButtonTypes';
import { LinkTypes } from './components-renderer/LinkTypes/LinkTypes';
import { ImageTypes } from './components-renderer/ImageTypes/ImageTypes';
import { QauantityTypes } from './components-renderer/QauantityTypes/QauantityTypes';
import { PriceSliderTypes } from './components-renderer/PriceSliderTypes/PriceSliderTypes';
import { ContactsTypes } from './components-renderer/ContactsTypes/ContactsTypes';
import { FilterCheckboxTypes } from './components-renderer/FilterCheckboxTypes/FilterCheckboxTypes';
import { ProductCardType } from './components-renderer/ProductCardType/ProductCardType';

const Layout = () => {

  return (
    <>
      <div className='p-4 bg-blue-500 fixed top-0 w-full z-10'>
        <nav className='flex justify-between w-6/12'>
          <LinkButton variant='secondary' font='xl' path='/buttons'>BUTTONS</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/links'>LINKS</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/images'>IMAGES</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/quantity'>QUANTITY</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/price-slider'>PRICE-SLIDER</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/contacts'>CONTACTS</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/checkbox'>CECKBOX</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/product'>PRODUCT</LinkButton>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

const Modal = () => (
  <div className='w-32 h-32 bg-green-300 absolute top-[30%] left-[50%]'>MODAL</div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: '/buttons', element: <ButtonTypes /> },
      { path: '/links', element: <LinkTypes /> },
      { path: '/images', element: <ImageTypes /> },
      { path: '/quantity', element: <QauantityTypes /> },
      { path: '/price-slider', element: <PriceSliderTypes /> },
      { path: '/contacts', element: <ContactsTypes /> },
      { path: '/checkbox', element: <FilterCheckboxTypes /> },
      {
        path: '/product',
        element: <ProductCardType />,
        children: [
          { path: 'productId', element: <Modal /> }
        ],
      },
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
