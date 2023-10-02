import './ProductTitle.css';

const ProductTitle = ({ title }) => {

    return (
        <div className='product-title-container'>
            <button className='product-title'>{title}</button>
        </div>
    );
};

export default ProductTitle;