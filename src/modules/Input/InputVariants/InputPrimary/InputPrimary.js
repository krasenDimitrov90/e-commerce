import React from 'react';
import './InputPrimary.styles.css';

export const InputPrimary = React.memo(({ type }) => {
    return (
        <div className='input-primary-container'>
            <input className='input-primary' type={type || 'text'} />
        </div>
    );
});
