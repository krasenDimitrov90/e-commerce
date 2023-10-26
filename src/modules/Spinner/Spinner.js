import React from 'react';
import './Spinner.styles.css';

export const Spinner = React.memo(({ size }) => {

    const classes = 'loader ' + Spinner.sizes[size];

    return (
        <span className={classes}></span>
    );
});



Spinner.sizes = {
    XS: 'spinner-xs',
    SM: 'spinner-sm',
    BASE: 'spinner-base',
    LG: 'spinner-lg',
    XL: 'spinner-xl',
};