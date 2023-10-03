import React from 'react';
import './Spinner.styles.css';

export const Spinner = React.memo(({ size }) => {

    const classes = 'loader ' + 'spinner-' + size;

    return (
        <span className={classes}></span>
    );
});



Spinner.variants = {
    size: {
        xs: 'spinner-xs',
        sm: 'spinner-sm',
        base: 'spinner-base',
        lg: 'spinner-lg',
        xl: 'spinner-xl',
    },
};