import { Button, Icon, ProductPrice, ProductRating, ProductTitle } from '../../modules';

import './ProductItem.css';

export const ProductItem = () => {

    return (
        <div className='product-container'>
            <div className='product-tumbnails-container'>

            </div>

            <div className='product-description-container'>

                <ProductTitle title="Aenean Commodo Ligula Eget"/>

                <ProductPrice price={10} />

                <ProductRating reviews={10} />
            </div>
        </div>
    );
};