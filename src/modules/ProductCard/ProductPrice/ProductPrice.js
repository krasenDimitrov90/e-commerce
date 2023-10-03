import './ProductPrice.styles.css';

const ProductPrice = ({ price, discountFrom = null }) => {

    return (
        <div className='product-price-container'>
            <span className='product-price'>{price.toFixed(2)} лв</span>
            {discountFrom && <span className='product-discount-from'>{discountFrom.toFixed(2)} лв</span>}
        </div>
    );
};

export  default ProductPrice;