import React from 'react';
import { Button } from './Button';
import './Primary.styles.css';

const quantityReducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1 <= 1 ? 1 : state - 1;
    }
};

export const Primary = React.memo((props) => {
    const [quantity, dispatch] = React.useReducer(quantityReducer, props.quantity || 1);
    const [initial, setInitial] = React.useState(true);

    const increaseQuantityHandler = React.useCallback(() => dispatch('increment'), []);
    const decreseQuantityHandler = React.useCallback(() => dispatch('decrement'), []);

    React.useEffect(() => {
        if (initial) {
            setInitial(false);
        } else {
            props.onQuantityChange(quantity);
        }
    }, [quantity]);

    return (
        <div className='touch-spin-primary-container'>
            <Button
                variant={Button.variants.MINUS}
                onClick={decreseQuantityHandler}
                content={Button.content.MINUS}
            />
            <div className='touch-spin-primary-input-container'>
                <input className='touch-spin-primary-input'
                    readOnly
                    type="number"
                    min={1}
                    value={quantity}
                />
            </div>
            <Button
                variant={Button.variants.PLUS}
                onClick={increaseQuantityHandler}
                content={Button.content.PLUS}
            />
        </div>
    );
});
