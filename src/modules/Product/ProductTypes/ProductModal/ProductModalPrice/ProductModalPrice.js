import React from 'react';
import './ProductModalPrice.styles.css';

export const ProductModalPrice = React.memo(({ price, oldPrice = null }) => {
    
    const [integer, decimal] = price.toFixed(2).toString().split('.');
    const [discountInt, discountDecimal] = oldPrice ? oldPrice.toFixed(2).toString().split('.') : [null, null];

    const classes = 'product-price-container-modal';

    return (
        <div className={classes}>
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
});

// export default React.memo(ProductModalPrice);