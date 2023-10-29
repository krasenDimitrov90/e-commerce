import React from 'react';
import './Button.styles.css';

export const Button = React.memo((props) => {

    const classes = props.variant;

    return (
        <div className={classes}>
            <button className='touch-spin-primary-btn' onClick={props.onClick}>
                {props.content}
            </button>
        </div>
    );
});

Button.variants = {
    MINUS: 'touch-spin-primary-minus-container',
    PLUS: 'touch-spin-primary-plus-container',
};

Button.content = {
    MINUS: '-',
    PLUS: '+',
};
