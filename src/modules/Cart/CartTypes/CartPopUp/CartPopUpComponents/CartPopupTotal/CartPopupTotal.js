import React from 'react';
import './CartPopupTotal.styles.css';

export const CartPopupTotal = React.memo(() => {
    return (
        <div className="cart-popup-total-price">
            <span className='uppercase'>Общо</span>
            <span>82.50лв</span>
        </div>
    );
});
