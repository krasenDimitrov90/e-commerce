import './ProductPrice.css';

export const ProductPrice = ({ price }) => {

    return (
        <div className='product-price-container'>
            <span className='product-price'>${price.toFixed(2)}</span>
        </div>
    );
};