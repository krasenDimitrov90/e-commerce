import { Icon } from '../../Icons/Icons';

import './ProductRating.styles.css';

const ProductRating = ({ reviews }) => {

    return (
        <div className='product-rating-container'>
            <div className='product-rating-stars'>
                <Icon variant='empty-star'/>
                <Icon variant='empty-star'/>
                <Icon variant='empty-star'/>
                <Icon variant='empty-star'/>
                <Icon variant='empty-star'/>
            </div>
            <div className='product-rating-reviews'>
                <span>{reviews} Reviews</span>
            </div>
        </div>
    );
};

export default ProductRating;