import React from 'react';
import './ProductPrice.styles.css';

const ProductPrice = ({ price, discountFrom = null, cardVariant = 'horizontal' }) => {

    const [integer, decimal] = price.toFixed(2).toString().split('.');
    const [discountInt, discountDecimal] = discountFrom ? discountFrom.toFixed(2).toString().split('.') : [null, null];

    const classes = 'product-price-container-' + cardVariant;
        
    return (
        <div className={classes}>
            <p className='product-price'>
                {integer}
                <span className='price-decimal'>{decimal}</span>
                лв
            </p>
            {discountFrom &&
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