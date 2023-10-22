import React from 'react';

export const Cart = React.memo(() => {
    return (
        <div className="flex border-y border-y-gray-400 mb-[20px] py-[16px] font-bold text-base">
            <div className='flex-1 max-w-[58%]'>
                <span>Продукт</span>
            </div>
            <div className='flex flex-1 justify-between max-w-[41%] pr-[15px]'>
                <div className='flex flex-1 pr-[20px] justify-between'>
                    <span>Код</span>
                    <span className='flex justify-center w-[100px]'>Цена</span>
                </div>
                <div className='flex justify-center w-[110px]'>
                    <span>Количество</span>
                </div>
            </div>
            <div className='flex-1 max-w-[16%] pl-[15px]'>
                <span>Общо</span>
            </div>
        </div>
    );
});
