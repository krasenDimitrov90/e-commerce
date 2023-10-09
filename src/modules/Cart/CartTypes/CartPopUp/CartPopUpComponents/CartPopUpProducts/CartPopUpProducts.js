import React from 'react';
import { Image } from '../../../../../Image/Image';
import { Icon } from '../../../../../Icons/Icons';
import { Button } from '../../../../../Button/Button';
import './CartPopUpProducts.styles.css';

export const CartPopUpProducts = React.memo(() => {
    return (
        <div className='cart-popup-products-container'>
            <div className="cart-popup-product">
                <div className="cart-popup-product-image-wrap">
                    <Image src='/images/Coffie1.png' />
                    <div className='image-delete-item'>
                        <Button
                            variant='INFO'
                            rounded='CIRCLED'
                            size='SM'
                        >
                            <Icon variant='TRASH' />
                        </Button>
                    </div>
                </div>
                <div className="cart-popup-product-details">
                    <div className='product-name'>
                        <p>Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши</p>

                    </div>
                    <div className="product-price">
                        <span>133.34 лв </span>
                        <span className='text-gray-600'>x2</span>
                    </div>
                </div>
            </div>
            <div className="cart-popup-product">
                <div className="cart-popup-product-image-wrap">
                    <Image src='/images/Coffie1.png' />
                    <div className='image-delete-item'>
                        <Button
                            variant='INFO'
                            rounded='CIRCLED'
                            size='SM'
                        >
                            <Icon variant='TRASH' />
                        </Button>
                    </div>
                </div>
                <div className="cart-popup-product-details">
                    <div className='product-name'>
                        <p>Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши</p>
                    </div>
                    <div className="product-price">
                        <span>133.34 лв </span>
                        <span className='text-gray-600'>x2</span>
                    </div>
                </div>
            </div>
            <div className="cart-popup-product">
                <div className="cart-popup-product-image-wrap">
                    <Image src='/images/Coffie1.png' />
                    <div className='image-delete-item'>
                        <Button
                            variant='INFO'
                            rounded='CIRCLED'
                            size='SM'
                        >
                            <Icon variant='TRASH' />
                        </Button>
                    </div>
                </div>
                <div className="cart-popup-product-details">
                    <div className='product-name'>
                        <p>Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши</p>
                    </div>
                    <div className="product-price">
                        <span>133.34 лв </span>
                        <span className='text-gray-600'>x2</span>
                    </div>
                </div>
            </div>
            <div className="cart-popup-product">
                <div className="cart-popup-product-image-wrap">
                    <Image src='/images/Coffie1.png' />
                    <div className='image-delete-item'>
                        <Button
                            variant='INFO'
                            rounded='CIRCLED'
                            size='SM'
                        >
                            <Icon variant='TRASH' />
                        </Button>
                    </div>
                </div>
                <div className="cart-popup-product-details">
                    <div className='product-name'>
                        <p>Кафемашина ЕLEKOM ЕК 6826 за еспресо и капучино, 2 чаши</p>
                    </div>
                    <div className="product-price">
                        <span>133.34 лв </span>
                        <span className='text-gray-600'>x2</span>
                    </div>
                </div>
            </div>
        </div>
    );
});
