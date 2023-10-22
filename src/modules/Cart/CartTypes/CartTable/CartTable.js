import React from 'react';
import { Product } from '../../../Product/Product';
import { Summary } from '../../../Summary/Summary';
import { TableTitle } from '../../../TableTitle/TableTitle';
import { Button } from '../../../Button/Button';

const cart = [
    { id: 'id1', image: '/images/Coffie1.png', title: 'Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши', code: 2345, price: 999.4, quantity: 2 },
    { id: 'id2', image: '/images/Cotlon.png', title: 'Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши', code: 2345, price: 23.55, quantity: 4 },
    { id: 'id3', image: '/images/frape.png', title: 'Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши', code: 2345, price: 18.43, quantity: 2 },
    { id: 'id4', image: '/images/krem.png', title: 'Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши', code: 2345, price: 589.43, quantity: 3 },

    { id: 'id1', image: '/images/Coffie1.png', title: 'Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши', code: 2345, price: 133.4, quantity: 2 },
    { id: 'id2', image: '/images/Cotlon.png', title: 'Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши', code: 2345, price: 23.55, quantity: 4 },
    { id: 'id3', image: '/images/frape.png', title: 'Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши', code: 2345, price: 18.43, quantity: 2 },
    { id: 'id4', image: '/images/krem.png', title: 'Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши', code: 2345, price: 589.43, quantity: 3 },
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
                <div className='flex w-full flex-col sm:flex-row sm:justify-between'>
                    <div className='flex flex-col w-full sm:w-[calc(66%_-_15px)] px-[15px]'>
                        <div className='hidden sm:flex sm:flex-1'>
                            <TableTitle variant={TableTitle.variants.CART} />
                        </div>
                        <div className='hidden sm:flex sm:flex-col'>
                            {cart.map(product => {
                                return (
                                    <Product
                                        variant={Product.variants.TABLE_ROW}
                                        id={product.id}
                                        image={product.image}
                                        title={product.title}
                                        code={product.code}
                                        price={product.price}
                                        quantity={product.quantity}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className='flex sm:hidden'>

                    </div>
                    <div className='flex flex-col w-full sm:w-[calc(34%_-_15px)]'>
                        <div className='sticky top-[60px] ' >
                            <Summary
                                variant={Summary.variants.CART}
                                productsCount={cart.length}
                                totalPrice={cart.reduce((total, product) => total + product.price, 0)}
                                deliveryPrice={5.99}
                            />
                        </div>
                    </div>
                </div>
            }

            <div className='flex h-[50px] my-[20px] ml-[15px]'>
                <Button
                    upperCase={true}
                    size="XL"
                    fontWeight='BOLD'
                >
                    Към пазаруването
                </Button>
            </div>
        </>
    );
});
