import React from 'react';
import { Icon } from '../../../../Icons/Icons';
import './Header.styles.css';

export const Header = React.memo(({ onClick, categorie, expand }) => {
    
    const iconClasses = `accordion-primary-icon-expand ${expand ? 'rotate' : ''}`;

    return (
        <div className='flex flex-1 mt-[10px]'>
            <div className='flex flex-1 justify-between items-end'>
                <button onClick={onClick} className='flex-1 text-start text-lg text-[#444] font-[700] outline-none hover:text-green-400'>
                    {categorie}
                </button>
                <div className='flex'>
                    <div>
                        <button onClick={onClick} className='flex justify-center items-center text-green-400 text-lg w-[16px] h-[16px] rounded-sm outline-none'>
                            <span className={iconClasses}>
                                {<Icon variant='ARROW_DOWN' />}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});
