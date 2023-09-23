import React from 'react';
import './Qauantity.styles.css';

export const Qauantity = () => {

    const [quantity, setQuantity] = React.useState(1);

    const increaseQuantityHandler = () => setQuantity(prevValue => Number(prevValue) + 1);
    const decreseQuantityHandler = () => {
        setQuantity(prevValue => {
            if (prevValue <= 1) return 1;
            return Number(prevValue) - 1
        });
    };

    const onChangeHandler = (e) => {
        let newValue = Number(e.target.value);
        if (newValue === 0) newValue = 1;
        setQuantity(newValue);
    };

    return (
        <div className='quantity-container'>
            <div className='quantity-minus-container'>
                <button className='quantity-btn' onClick={decreseQuantityHandler}>-</button>
            </div>
            <div className='quantity-input-container'>
                <input onChange={onChangeHandler} type="number" min={1} value={quantity} className='quantity-input' />
            </div>
            <div className='quantity-plus-container'>
                <button className='quantity-btn' onClick={increaseQuantityHandler} >+</button>
            </div>
        </div>
    );
};