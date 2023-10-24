import React from 'react';
import './ProductLabel.styles.css';

const ProductLabel = React.memo(({ hasPromo, isNew, price, oldPrice }) => {

    let discount = React.useRef(0);
    if (hasPromo) {
        discount.current = Math.floor(((oldPrice - price) / oldPrice) * 100);
    }

    return (
        <div className='product-labels-container-vertical'>
            {hasPromo &&
                <div className='product-label-promo'>
                    <p>-{discount.current}%</p>
                </div>
            }
            {isNew &&
                <div className='product-label-new'>
                    <p>НОВ</p>
                </div>
            }
        </div>
    );
});

export default ProductLabel;