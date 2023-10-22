import React from 'react';
import { Button } from '../../../Button/Button';
import { Icon } from '../../../Icons/Icons';
import { Image } from '../../../Image/Image';
import { Qauantity } from '../../../Qauantity/Qauantity';

import './CartRow.styles.css';

export const CartRow = React.memo(({
    id, image, title, code, price, quantity
}) => {
    return (
        <div className="flex flex-col flex-1 border-b border-dashed border-b-gray-400 mx-[20px] py-[20px]">
            <div className='flex flex-1 items-center'>
                <div className='flex flex-1 max-w-[90px] h-[90px] rounded overflow-hidden border border-gray-400'>
                    <Image src={image} />
                </div>
                <div className='flex-1 pl-[20px] text-gray-700 text-base'>
                    <span className='product-title-text-ellipsis' >
                        {title}
                    </span>
                </div>
            </div>
            <div className='my-[10px]'>
                <span className='text-base'>Код: {code}</span>
            </div>
            <div className='flex flex-1 justify-between items-center'>
                <div className='flex flex-1 pr-[20px] justify-between'>
                    <span className='flex font-bold text-[14px]'>
                        Цена: {price.toFixed(2)}лв
                    </span>
                </div>
                <div className='flex justify-center w-[110px]'>
                    <Qauantity quantity={quantity} />
                </div>
            </div>
            <div className='flex flex-1 justify-between items-center mt-[16px]'>
                <span className='text-red-400 text-[14px] font-extrabold'>
                    Междинна сума: {(quantity * price).toFixed(2)}лв
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
