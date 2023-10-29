import React from 'react';
import { Icon } from '../../../Icons/Icons';
import './InputSecondary.styles.css';

export const InputSecondary = React.memo(({ type, icon, value, onChange, placeholder }) => {
    return (
        <div className='input-secondary-container'>
            <div className='input-secondary-icon'>
                <Icon variant={icon} />
                <div className='input-secondary-arrow'>
                    <Icon variant='ARROW_RIGHT' />
                </div>
            </div>
            <input
                className='input-secondary'
                type={type || 'text'}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
            />
        </div>
    );
});
