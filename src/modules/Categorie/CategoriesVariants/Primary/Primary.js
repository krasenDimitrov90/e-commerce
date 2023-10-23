import React from 'react';
import { Icon } from '../../../Icons/Icons';

import './Primary.styles.css';

export const Primary = React.memo(() => {

    const [expand, setExpand] = React.useState(false);

    let iconClasses = 'categorie-icon-expand';
    iconClasses += expand ? ' rotate' : '';

    const hadleExpand = React.useCallback(() => {
        setExpand(curr => !curr);
    }, []);

    return (
        <div className='flex flex-1'>
            <div className='flex flex-1 justify-between items-end'>
                <button onClick={hadleExpand} className='flex-1 text-start text-lg text-[#444] font-[700] outline-none hover:text-green-400'>
                    Бутик ШИК
                </button>
                <div className='flex'>
                    <div>
                        <button onClick={hadleExpand} className='flex justify-center items-center text-green-400 text-lg w-[16px] h-[16px] rounded-sm outline-none'>
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
