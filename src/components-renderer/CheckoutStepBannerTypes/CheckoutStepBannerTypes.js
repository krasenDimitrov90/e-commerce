import React from 'react';
import { CheckoutStepBanner } from '../../modules';


export const CheckoutStepBannerTypes = React.memo(() => {

    const variant = CheckoutStepBanner.variants.PRIMARY;

    return (
        <div className='flex flex-col w-[700px] p-5'>
            <CheckoutStepBanner variant={variant} order='1' title='ЛИЧНИ ДАННИ' completed={true} />
            <div className='h-[1px]'></div>
            <CheckoutStepBanner variant={variant} order='2' title='АДРЕС ЗА ДОСТАВКА' />
        </div>
    );
});
