import React from 'react';
import { NavLink } from 'react-router-dom';

import ProductDescription from './ProductDescription/ProductDescription';
import ProductLabel from './ProductLabel/ProductLabel';
import ProductPrice from './ProductPrice/ProductPrice';
import ProductRating from './ProductRating/ProductRating';
import ProductTumbnails from './ProductTumbnails/ProductTumbnails';

import { Image } from '../../../Image/Image';
import { Button } from '../../../Button/Button';
import { Icon } from '../../../Icons/Icons';

import './Card.styles.css';


export const Card = React.memo((props) => {
    const {productPath, image, hasPromo, isNew, oldPrice, modalPath, onLike, title, price, onAddToCart, reviews} = props
    return (
        <div className='product-container-horizontal'>
            <div className='flex relative'>
                <NavLink to={productPath} className='product-image-container'>
                    <Image src={image} />
                    <ProductLabel hasPromo={hasPromo} isNew={isNew} price={price} oldPrice={oldPrice} />
                </NavLink>
                <ProductTumbnails path={modalPath} onLike={onLike} />
            </div>
            <div className='product-description-container'>
                <ProductDescription title={title} path={productPath} />
                <ProductPrice price={price} oldPrice={oldPrice} />
                <ProductRating reviews={reviews || 0} />
            </div>

            <div className='product-add-to-cart-btn-container'>
                <Button
                    onClick={onAddToCart}
                    rounded='NOT_ROUNDED'
                    size='LG'
                    expand={true}
                    leftIcon={<Icon variant='CART' right={true} />}
                >
                    Добави в кошницата
                </Button>
            </div>
        </div>
    )
});