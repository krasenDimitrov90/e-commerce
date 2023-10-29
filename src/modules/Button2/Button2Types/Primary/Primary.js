import React from 'react';
import './Primary.styles.css';

export const Primary = React.memo((props) => {

    const { type, onClick, disabled, isLoading, children } = props;

    return (
        <button
            type={type} onClick={onClick} disabled={disabled || isLoading}
            className='px-4 py-1 flex items-center bg-blue-500 rounded-full text-white'
        >
            {children}
        </button>
    );
});
