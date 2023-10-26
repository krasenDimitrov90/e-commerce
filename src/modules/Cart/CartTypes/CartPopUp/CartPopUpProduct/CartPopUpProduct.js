import React from 'react';
import { Image } from '../../../../Image/Image';
import { Icon } from '../../../../Icons/Icons';
import { Button } from '../../../../Button/Button';
import './CartPopUpProduct.styles.css';

export const CartPopUpProduct = React.memo(({
    image, title, price, quantity
}) => {
    return (
        <div className="cart-popup-product">
            <div className="cart-popup-product-image-wrap">
                <Image variant={Image.variants.PRIMARY} src={image} />
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
                    <p>{title}</p>

                </div>
                <div className="product-price">
                    <span>{price} лв </span>
                    <span className='text-gray-600'>x{quantity}</span>
                </div>
            </div>
        </div>
    );
});
