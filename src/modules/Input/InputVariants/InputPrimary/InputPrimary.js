import React from 'react';
import './InputPrimary.styles.css';

export const InputPrimary = React.memo(({ type, value, onChange, placeholder }) => {
    return (
        <div className='input-primary-container'>
            <input
                className='input-primary'
                type={type || 'text'}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
            />
        </div>
    );
});
