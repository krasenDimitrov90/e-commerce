import React from 'react';
import { CartPopUpProducts, CartPopupTotal, CartPopupButtons } from './CartPopUpComponents';
import './CartPopUp.styles.css';

export const CartPopUp = React.memo(() => {
    return (
        <div className='cart-popup-container'>
            <CartPopUpProducts />
            <CartPopupTotal />
            <CartPopupButtons />

            
        </div>
    );
});
