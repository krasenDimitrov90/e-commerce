import React from 'react';
import { CartTableProduct } from './CartTableProduct/CartTableProduct';
import { CartTableTitle } from './CartTableTitle/CartTableTitle';
import { CartTotal } from './CartTotal/CartTotal';
import './CartTable.styles.css';

const cart = [
    { id: 'id1', image: '/images/Coffie1.png', title: 'Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши', price: 133.4, quantity: 2 },
    { id: 'id2', image: '/images/Cotlon.png', title: 'Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши', price: 23.55, quantity: 4 },
    { id: 'id3', image: '/images/frape.png', title: 'Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши', price: 18.43, quantity: 2 },
    { id: 'id4', image: '/images/krem.png', title: 'Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши', price: 589.43, quantity: 3 },

    { id: 'id1', image: '/images/Coffie1.png', title: 'Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши', price: 133.4, quantity: 2 },
    { id: 'id2', image: '/images/Cotlon.png', title: 'Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши', price: 23.55, quantity: 4 },
    { id: 'id3', image: '/images/frape.png', title: 'Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши', price: 18.43, quantity: 2 },
    { id: 'id4', image: '/images/krem.png', title: 'Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши', price: 589.43, quantity: 3 },
];

// const cart = [];

export const CartTable = React.memo(() => {
    return (
        <>
            {cart.length === 0 &&
                <div className='flex'>
                    <div className='pt-[20px] pb-[2px] ml-[15px] border-b border-b-gray-600 w-auto'>
                        <span>Количката е празна</span>
                    </div>
                </div>
            }
            {cart.length > 0 &&
                <div className='flex'>
                    <div className='cart-table-container'>
                        <CartTableTitle />
                        <div className='cart-table-products-container'>
                            {cart.map(product => {
                                return (
                                    <CartTableProduct
                                        id={product.id}
                                        image={product.image}
                                        title={product.title}
                                        price={product.price}
                                        quantity={product.quantity}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <CartTotal />
                </div>
            }
        </>
    );
});
