import React from 'react';
import { NavLink } from 'react-router-dom';

import ProductPrice from './ProductPrice/ProductPrice';
import ProductRating from './ProductRating/ProductRating';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductTumbnails from './ProductTumbnails/ProductTumbnails';

import { Image } from '../Image/Image';
import { Button } from '../Button/Button';
import { Icon } from '../Icons/Icons';

import './ProductCard.styles.css';

export const ProductCard = React.memo(({
    title,
    image,
    productPath,
    modalPath,
    price,
    discountFrom,
    onLike,
    onAddToCart
}) => {

    return (
        <div className='product-container'>
            <NavLink className='product-image-container'>
                <Image src={image} />
            </NavLink>
            <ProductTumbnails path={modalPath} onLike={onLike} />
            <div className='product-description-container'>
                <ProductDescription title={title} path={productPath} />
                <ProductPrice price={price} discountFrom={discountFrom} />
                <ProductRating reviews={10} />
            </div>

            <div className='product-add-to-cart-btn-container'>
                <Button
                    onClick={onAddToCart}
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
});