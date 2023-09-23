import './Qauantity.styles.css';

export const Qauantity = ({ quantity, setQuantity }) => {

    const increaseQuantityHandler = () => updateInput(quantity + 1);

    const decreseQuantityHandler = () => updateInput(quantity - 1);

    const updateInput = (quantity) => {
        if (quantity <= 1) quantity = 1;

        setQuantity(quantity);
    };

    return (
        <div className='quantity-container'>
            <div className='quantity-minus-container'>
                <button className='quantity-btn' onClick={decreseQuantityHandler}>-</button>
            </div>
            <div className='quantity-input-container'>
                <input readOnly type="number" min={1} value={quantity} className='quantity-input' />
            </div>
            <div className='quantity-plus-container'>
                <button className='quantity-btn' onClick={increaseQuantityHandler} >+</button>
            </div>
        </div>
    );
};