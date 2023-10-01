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

const Layout = () => {

  return (
    <>
      <div className='p-4 bg-blue-500 fixed top-0 w-full'>
        <nav className='flex justify-between w-6/12'>
          <LinkButton variant='secondary' font='xl' path='/buttons'>BUTTONS</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/links'>LINKS</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/images'>IMAGES</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/quantity'>QUANTITY</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/price-slider'>PRICE-SLIDER</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/contacts'>CONTACTS</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/checkbox'>CECKBOX</LinkButton>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

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
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
