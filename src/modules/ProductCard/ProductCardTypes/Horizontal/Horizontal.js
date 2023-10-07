import React from 'react';
import { NavLink } from 'react-router-dom';

import ProductPrice from '../../ProductPrice/ProductPrice';
import ProductRating from '../../ProductRating/ProductRating';
import ProductDescription from '../../ProductDescription/ProductDescription';
import ProductTumbnails from '../../ProductTumbnails/ProductTumbnails';
import ProductLabel from '../../ProductLabel/ProductLabel';

import { Image } from '../../../Image/Image';
import { Button } from '../../../Button/Button';
import { Icon } from '../../../Icons/Icons';

import './Horizontal.styles.css';


export const Horizontal = React.memo((props) => {
    const {productPath, image, hasPromo, isNew, oldPrice, modalPath, onLike, title, price, onAddToCart} = props
    return (
        <div className='product-container-horizontal'>
            <div className='flex relative'>
                <NavLink to={productPath} className='product-image-container'>
                    <Image src={image} />
                    <ProductLabel hasPromo={hasPromo} isNew={isNew} price={price} oldPrice={oldPrice} />
                </NavLink>
                <ProductTumbnails path={modalPath} onLike={onLike} variant='HORIZONTAL' />
            </div>
            <div className='product-description-container'>
                <ProductDescription title={title} path={productPath} />
                <ProductPrice price={price} oldPrice={oldPrice} />
                <ProductRating reviews={10} />
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