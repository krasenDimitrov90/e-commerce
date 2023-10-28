import React from 'react';

import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

import { LinkButton } from './modules';
import { ButtonTypes } from './components-renderer/ButtonTypes/ButtonTypes';
import { Button2Types } from './components-renderer/Button2Types/Button2Types';
import { LinkTypes } from './components-renderer/LinkTypes/LinkTypes';
import { ImageTypes } from './components-renderer/ImageTypes/ImageTypes';
import { TouchSpinTypes } from './components-renderer/TouchSpinTypes/TouchSpinTypes';
import { PriceSliderTypes } from './components-renderer/PriceSliderTypes/PriceSliderTypes';
import { ContactsTypes } from './components-renderer/ContactsTypes/ContactsTypes';
import { CheckboxTypes } from './components-renderer/CheckboxTypes/CheckboxTypes';
import { ProductCardType } from './components-renderer/ProductCardType/ProductCardType';
import { ModalTypes } from './components-renderer/ModalTypes/ModalTypes';
import { CartTypes } from './components-renderer/CartTypes/CartTypes';
import { InputTypes } from './components-renderer/InputTypes/InputTypes';
import { WizrardStepTypes } from './components-renderer/WizrardStepTypes/WizrardStepTypes';
import { SlideTypes } from './components-renderer/SlideTypes/SlideTypes';
import { AccordionTypes } from './components-renderer/AccordionTypes/AccordionTypes';

const Layout = () => {

  return (
    <>
      <div className='p-4 bg-blue-500 fixed top-0 w-full z-10'>
        <nav className='flex justify-between w-full'>
          <LinkButton variant='secondary' font='xl' path='/buttons'>BUTTONS</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/links'>LINKS</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/images'>IMAGES</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/touch-spin'>TOUCH_SPIN</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/price-slider'>PRICE-SLIDER</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/contacts'>CONTACTS</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/checkbox'>CECKBOX</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/product'>PRODUCT</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/cart'>CART</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/input'>INPUT</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/wizard-step'>WIZARD_STEP</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/slides'>SLIDES</LinkButton>
        </nav>
        <nav className='flex justify-between w-full mt-5'>
          <LinkButton variant='secondary' font='xl' path='/accordion'>ACCORDION</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/buttons2'>BUTTONS 2</LinkButton>
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
      { path: '/touch-spin', element: <TouchSpinTypes /> },
      { path: '/price-slider', element: <PriceSliderTypes /> },
      { path: '/contacts', element: <ContactsTypes /> },
      { path: '/checkbox', element: <CheckboxTypes /> },
      {
        path: '/product',
        element: <ProductCardType />,
        children: [
          // { path: 'modal/:productId', element: <ProductModal /> }
          { path: 'modal/:productId', element: <ModalTypes /> }
        ],
      },
      { path: '/cart', element: <CartTypes /> },
      { path: '/input', element: <InputTypes /> },
      { path: '/wizard-step', element: <WizrardStepTypes /> },
      { path: '/slides', element: <SlideTypes /> },
      { path: '/accordion', element: <AccordionTypes /> },
      { path: '/buttons2', element: <Button2Types /> },
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
