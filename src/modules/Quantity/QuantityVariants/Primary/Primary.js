import React from 'react';
import './Primary.styles.css';

export const Primary = React.memo((props) => {
    const [quantity, setQuantity] = React.useState(props.quantity || 1);

    const increaseQuantityHandler = () => updateInput(quantity + 1);

    const decreseQuantityHandler = () => updateInput(quantity - 1);

    const updateInput = (quantity) => {
        if (quantity <= 1) quantity = 1;

        setQuantity(quantity);
    };

    return (
        <div className='quantity-primary-container'>
            <div className='quantity-primary-minus-container'>
                <button className='quantity-primary-btn' onClick={decreseQuantityHandler}>-</button>
            </div>
            <div className='quantity-primary-input-container'>
                <input readOnly type="number" min={1} value={quantity} className='quantity-input' />
            </div>
            <div className='quantity-primary-plus-container'>
                <button className='quantity-btn' onClick={increaseQuantityHandler} >+</button>
            </div>
        </div>
    );
});
