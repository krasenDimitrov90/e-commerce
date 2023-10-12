import React from 'react';
import { CartPopUpProduct } from './CartPopUpProduct/CartPopUpProduct';
import { CartPopupButtons } from './CartPopupButtons/CartPopupButtons';
import { CartPopupTotal } from './CartPopupTotal/CartPopupTotal';

import './CartPopUp.styles.css';

const cart = [
    { id: 'id1', image: '/images/Coffie1.png', title: 'Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши', price: 133.4, quantity: 2 },
    { id: 'id2', image: '/images/Cotlon.png', title: 'Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши', price: 23.55, quantity: 4 },
    { id: 'id3', image: '/images/frape.png', title: 'Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши', price: 18.43, quantity: 2 },
    { id: 'id4', image: '/images/krem.png', title: 'Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши', price: 589.43, quantity: 3 },
];

export const CartPopUp = React.memo(() => {
    return (
        <div className='cart-popup-container'>
            
            <div className='cart-popup-products-container'>
                {cart.map(product => {
                    return (
                        <CartPopUpProduct
                            id={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price.toFixed(2)}
                            quantity={product.quantity}
                        />
                    );
                })}
            </div>
            <CartPopupTotal 
                total={cart.reduce((total, p)=> total + p.price,0).toFixed(2)}
            />
            <CartPopupButtons />
        </div>
    );
});
