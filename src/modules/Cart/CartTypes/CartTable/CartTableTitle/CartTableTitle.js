import React from 'react';


export const CartTableTitle = React.memo(() => {
    return (
        <div className="flex border-y border-y-gray-400 mb-[20px] py-[16px] font-bold text-base">
            <div className='flex-1 max-w-[58%] pr-[15px]'>
                <span>Продукт</span>
            </div>
            <div className='flex flex-1 justify-between max-w-[41%] px-[15px]'>
                <span>Цена</span>
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
