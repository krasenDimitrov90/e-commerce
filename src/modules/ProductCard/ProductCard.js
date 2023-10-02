import ProductPrice from './ProductPrice/ProductPrice';
import ProductRating from './ProductRating/ProductRating';
import ProductTitle from './ProductTitle/ProductTitle';

import { Image } from '../Image/Image';
import { Button } from '../Button/Button';
import { Icon } from '../Icons/Icons';

import './ProductCard.styles.css';

export const ProductCard = ({ title, image }) => {

    return (
        <div className='product-container'>
            <div className='product-tumbnails-container'>
                <Image src={image} />
            </div>

            <div className='product-description-container'>

                <ProductTitle title={title} />

                <ProductPrice price={10} discountFrom={15.5} />

                <ProductRating reviews={10} />
            </div>

            <div className='product-tumbnail-btns-container'>
                <Button
                    variant='tumbnail'
                    rounded='rounded'
                    size='square-lg'
                    fontSize='lg'
                >
                    {<Icon variant='heart' />}
                </Button>
                <Button
                    variant='tumbnail'
                    rounded='rounded'
                    size='square-lg'
                >
                    {<Icon variant='search' />}
                </Button>
            </div>

            <div className='product-add-to-cart-btn-container'>
                <Button
                    variant='primary'
                    rounded='not-rounded'
                    size='lg'
                    expand={true}
                    leftIcon={<Icon variant='cart' right={true} />}
                >
                    Добави в кошницата
                </Button>
            </div>
        </div>
    );
};