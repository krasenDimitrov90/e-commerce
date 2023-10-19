import React from 'react';
import './ProductPrice.styles.css';

const ProductPrice = ({ price, oldPrice = null }) => {

    const [integer, decimal] = price.toFixed(2).toString().split('.');
    const [discountInt, discountDecimal] = oldPrice ? oldPrice.toFixed(2).toString().split('.') : [null, null];

    return (
        <div className='product-price-container-vertical'>
            <p className='product-price'>
                {integer}
                <span className='price-decimal'>{decimal}</span>
                лв
            </p>
            {oldPrice &&
                <p className='product-discount-from'>
                    {discountInt}
                    <span className='price-decimal-discount'>{discountDecimal}</span>
                    лв
                </p>
            }
        </div>
    );
};

export default React.memo(ProductPrice);
