import React from 'react';
import { Button } from '../../../../Button/Button';

export const CartTotal = React.memo(({
    productsCount, totalPrice, deliveryPrice
}) => {
    return (
        <div className='flex flex-col w-[calc(34%_-_15px)]'>
            <div className='sticky top-[60px] flex flex-col w-full p-[30px] mx-[15px] border border-gray-400'>
                <div className='border-b border-b-gray-400 pb-[10px]'>
                    <span className='uppercase text-lg font-bold text-gray-600'>
                        В количката има
                        <span className='text-red-500 text-[20px] px-[8px]'>
                            {productsCount}
                        </span>
                        продукта
                    </span>
                </div>
                <div className='mt-[24px] pb-[10px] border-b border-b-black'>
                    <div className='flex justify-between pb-[12px] text-lg'>
                        <span className='text-gray-600'>Цена на продуктите:</span>
                        <span className='font-bold'>
                            {totalPrice}лв
                        </span>
                    </div>
                    <div className='flex justify-between pb-[12px] text-lg'>
                        <span className='text-gray-600'>Цена за доставка:</span>
                        <span className='font-bold'>
                            {deliveryPrice}лв
                        </span>
                    </div>
                </div>
                <div className='py-[16px]'>
                    <div className='flex justify-between'>
                        <span className='uppercase text-xl font-bold'>Общо</span>
                        <span className='text-xl font-bold'>
                            {(totalPrice + deliveryPrice).toFixed(2)}лв
                        </span>
                    </div>
                </div>
                <div className='flex mt-[10px]'>
                    <Button size='XL' variant='DARK' fontWeight='BOLD' expand={true} upperCase={true}>
                        Купи
                    </Button>
                </div>
            </div>
        </div>
    );
});