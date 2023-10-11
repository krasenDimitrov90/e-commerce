import React from 'react';
import { Button } from '../../../../Button/Button';
import { Icon } from '../../../../Icons/Icons';
import { Qauantity } from '../../../../Qauantity/Qauantity';
import { Image } from '../../../../Image/Image';


export const CartTableProduct = React.memo(({ id, image, title, price, quantity }) => {

    return (
        <div className="flex border-b border-dashed border-b-gray-400 py-[20px]">
            <div className='flex flex-1 items-center max-w-[58%] pr-[15px]'>
                <div className='flex w-[90px] h-[90px] rounded overflow-hidden border border-gray-400'>
                    <Image src={image} />
                </div>
                <span className='max-w-[calc(100%_-_90px)] pl-[20px] text-gray-700 text-base'>
                    {title}
                </span>
            </div>
            <div className='flex flex-1 justify-between items-center max-w-[41%] px-[15px]'>
                <span className='font-bold text-[14px]'>
                    {price.toFixed(2)}лв
                </span>
                <div className='flex justify-center w-[110px]'>
                    <Qauantity quantity={quantity}/>
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
