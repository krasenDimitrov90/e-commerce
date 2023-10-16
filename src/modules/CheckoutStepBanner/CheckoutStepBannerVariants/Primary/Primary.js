import React from 'react';
import './Primary.styles.css';
import { Icon } from '../../../Icons/Icons';

export const Primary = React.memo(({ order, title, completed }) => {
    return (
        <div className='flex w-full h-[50px] border border-gray-400'>
            <div className='flex flex-1'>
                <div className='w-[50px] relative flex justify-center items-center'>
                    <span className='font-bold text-lg'>{order}</span>
                    <div className='checkout-banner-primary-arrow'>
                        <Icon variant='ARROW_RIGHT' />
                    </div>
                </div>
                <div className='flex justify-center items-center pl-[20px]'>
                    <span className='font-bold'>{title}</span>
                    {completed &&
                        <div className='text-green-300 pl-[20px]'>
                            <Icon variant='CHECK' />
                        </div>
                    }
                </div>
                {completed &&
                    <div className='flex flex-1 justify-end items-center px-[15px] gap-[10px] text-base text-gray-700'>
                        <Icon variant='PEN' />
                        <div className='h-full'>
                            <button className='h-full flex justify-center items-center font-bold hover:text-green-400'>Редактирай</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
});
