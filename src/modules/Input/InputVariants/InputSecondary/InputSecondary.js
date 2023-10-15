import React from 'react';
import { Icon } from '../../../Icons/Icons';
import './InputSecondary.styles.css';

export const InputSecondary = React.memo(({ type, icon }) => {
    return (
        <div className='input-secondary-container'>
            <div className='input-secondary-icon'>
                <Icon variant={icon} />
                <div className='input-secondary-arrow'>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <input className='input-secondary' type={type || 'text'} />
        </div>
    );
});
