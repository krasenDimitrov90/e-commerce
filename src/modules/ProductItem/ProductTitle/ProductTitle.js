import './ProductTitle.css';

export const ProductTitle = ({ title }) => {

    return (
        <div className='product-title-container'>
            <button className='product-title'>{title}</button>
        </div>
    );
};