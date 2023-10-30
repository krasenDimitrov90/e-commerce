import React from 'react';
import { Button } from '../../../Button/Button';
import { Icon } from '../../../Icons/Icons';
import { Image } from '../../../Image/Image';
import { TouchSpin } from '../../../TouchSpin/TouchSpin';

import './TableRow.styles.css';


export const TableRow = React.memo(({ id, image, title, code, price, quantity, onQuantityChange }) => {

    return (
        <div className="flex border-b border-dashed border-b-gray-400 py-[20px]">
            <div className='flex flex-1 items-center max-w-[58%] pr-[15px]'>
                <div className='flex w-[90px] h-[90px] rounded overflow-hidden border border-gray-400'>
                    <Image variant={Image.variants.PRIMARY} src={image} />
                </div>
                <div className='max-w-[calc(100%_-_90px)] pl-[20px] text-gray-700 text-base'>
                    <span className='product-text-ellipsis' >
                        {title}
                    </span>
                </div>
            </div>
            <div className='flex flex-1 justify-between items-center max-w-[41%] pr-[15px]'>
                <div className='flex flex-1 pr-[20px] justify-between'>
                    <span>{code}</span>
                    <span className='flex justify-center font-bold text-[14px] w-[100px]'>
                        {price.toFixed(2)}лв
                    </span>
                </div>
                <div className='flex justify-center w-[110px]'>
                    <TouchSpin
                        variant={TouchSpin.variants.PRIMARY}
                        onQuantityChange={onQuantityChange}
                        quantity={quantity}
                    />
                </div>
            </div>
            <div className='flex flex-1 justify-between items-center max-w-[16%] pl-[15px]'>
                <span className='text-red-400 text-[14px] font-extrabold'>
                    {(quantity * price).toFixed(2)}лв
                </span>
                <Button
                    variant='INFO'
                    rounded='CIRCLED'
                    size='SM'
                >
                    <Icon variant='TRASH' />
                </Button>
            </div>
        </div>
    );
});
