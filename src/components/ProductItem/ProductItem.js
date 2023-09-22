import { Button, Icon, ProductPrice, ProductRating, ProductTitle, ProductImage } from '../../modules';

import './ProductItem.css';

export const ProductItem = ({ title, image }) => {

    return (
        <div className='product-container'>
            <div className='product-tumbnails-container'>
                <ProductImage image={image} />
            </div>

            <div className='product-description-container'>

                <ProductTitle title={title} />

                <ProductPrice price={10} discountFrom={15.5}/>

                <ProductRating reviews={10} />
            </div>

            <div className='product-zoom-btn-container'>
            <Button
                    variant='white-green'
                    rounded='rounded'
                    size='btn-small'
                    contentSize='btn-content-mid'
                >
                   {<Icon variant='search' />}
                </Button>
            </div>

            <div className='product-add-to-cart-btn-container'>
                <Button
                    variant='blue-green'
                    expand={true}
                    leftIcon={<Icon variant='cart' right={true} />}
                >
                    Добави в кошницата
                </Button>
            </div>
        </div>
    );
};