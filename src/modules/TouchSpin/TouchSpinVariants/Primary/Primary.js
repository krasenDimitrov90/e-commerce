import React from 'react';
import './Primary.styles.css';

export const Primary = React.memo((props) => {
    const [quantity, setQuantity] = React.useState(props.quantity || 1);

    const updateInput = React.useCallback((quantity) => {
        if (quantity <= 1) quantity = 1;

        setQuantity(quantity);
    }, []);

    const increaseQuantityHandler = React.useCallback(() => (updateInput(quantity + 1)), [updateInput]);

    const decreseQuantityHandler = () => updateInput(quantity - 1);

    

    return (
        <div className='touch-spin-primary-container'>
            <div className='touch-spin-primary-minus-container'>
                <button className='touch-spin-primary-btn' onClick={decreseQuantityHandler}>-</button>
            </div>
            <div className='touch-spin-primary-input-container'>
                <input className='touch-spin-primary-input'
                    readOnly
                    type="number"
                    min={1}
                    value={quantity}
                />
            </div>
            <div className='touch-spin-primary-plus-container'>
                <button className='touch-spin-primary-btn' onClick={increaseQuantityHandler} >+</button>
            </div>
        </div>
    );
});
