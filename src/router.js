import { createBrowserRouter, Outlet } from "react-router-dom";

import { LinkButton } from './modules';
import { ButtonTypes } from './components-renderer/ButtonTypes/ButtonTypes';
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
import { CarouselTypes } from './components-renderer/CarouselTypes/CarouselTypes';
import { BreadcrumbTypes } from './components-renderer/BreadcrumbTypes/BreadcrumbTypes';
import { IconsTypes } from './components-renderer/IconsTypes/IconsTypes';
import { PaginationTypes } from './components-renderer/PaginationTypes/PaginationTypes';

const Layout = () => {

    return (
        <>
            <div className='p-4 bg-blue-500 fixed top-0 w-full z-10'>
                <nav className='flex justify-between w-full'>
                    <LinkButton variant='secondary' font='xl' path='/ui/buttons'>BUTTONS</LinkButton>
                    <LinkButton variant='secondary' font='xl' path='/ui/links'>LINKS</LinkButton>
                    <LinkButton variant='secondary' font='xl' path='/ui/images'>IMAGES</LinkButton>
                    <LinkButton variant='secondary' font='xl' path='/ui/touch-spin'>TOUCH_SPIN</LinkButton>
                    <LinkButton variant='secondary' font='xl' path='/ui/price-slider'>PRICE-SLIDER</LinkButton>
                    <LinkButton variant='secondary' font='xl' path='/ui/contacts'>CONTACTS</LinkButton>
                    <LinkButton variant='secondary' font='xl' path='/ui/checkbox'>CECKBOX</LinkButton>
                    <LinkButton variant='secondary' font='xl' path='/ui/product'>PRODUCT</LinkButton>
                    <LinkButton variant='secondary' font='xl' path='/ui/cart'>CART</LinkButton>
                    <LinkButton variant='secondary' font='xl' path='/ui/input'>INPUT</LinkButton>
                    <LinkButton variant='secondary' font='xl' path='/ui/wizard-step'>WIZARD_STEP</LinkButton>
                    <LinkButton variant='secondary' font='xl' path='/ui/slides'>SLIDES</LinkButton>
                </nav>
                <nav className='flex justify-between w-full mt-5'>
                    <LinkButton variant='secondary' font='xl' path='/ui/accordion'>ACCORDION</LinkButton>
                    <LinkButton variant='secondary' font='xl' path='/ui/carousel'>CAROUSEL</LinkButton>
                    <LinkButton variant='secondary' font='xl' path='/ui/breadcrumb'>BREADCRUMB</LinkButton>
                    <LinkButton variant='secondary' font='xl' path='/ui/icons'>ICONS</LinkButton>
                    <LinkButton variant='secondary' font='xl' path='/ui/pagination/1'>PAGINATION</LinkButton>
                </nav>
            </div>
            <Outlet />
        </>
    );
};

export const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path: '/ui',
                element: <Layout />,
                children: [
                    { path: 'buttons', element: <ButtonTypes /> },
                    { path: 'links', element: <LinkTypes /> },
                    { path: 'images', element: <ImageTypes /> },
                    { path: 'touch-spin', element: <TouchSpinTypes /> },
                    { path: 'price-slider', element: <PriceSliderTypes /> },
                    { path: 'contacts', element: <ContactsTypes /> },
                    { path: 'checkbox', element: <CheckboxTypes /> },
                    {
                        path: 'product',
                        element:
                            <>
                                <ProductCardType />,
                                <Outlet />
                            </>,
                        children: [
                            { path: 'modal/:productId', element: <ModalTypes /> }
                        ],
                    },
                    { path: 'cart', element: <CartTypes /> },
                    { path: 'input', element: <InputTypes /> },
                    { path: 'wizard-step', element: <WizrardStepTypes /> },
                    { path: 'slides', element: <SlideTypes /> },
                    { path: 'accordion', element: <AccordionTypes /> },
                    { path: 'carousel', element: <CarouselTypes /> },
                    { path: 'breadcrumb', element: <BreadcrumbTypes /> },
                    { path: 'icons', element: <IconsTypes /> },
                    { path: 'pagination/:page', element: <PaginationTypes /> },
                ]
            }
        ]
    }
]);