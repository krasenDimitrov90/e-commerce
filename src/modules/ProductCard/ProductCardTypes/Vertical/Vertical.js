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

import './Vertical.styles.css';


export const Vertical = React.memo((props) => {
    
    const {productPath, image, hasPromo, isNew, oldPrice, modalPath, onLike, title, price, onAddToCart, reviews} = props

    return (
        <div className='product-container-vertical'>
            <div className='product-image-wrap'>
                <NavLink to={productPath} className='product-image-container'>
                    <Image src={image} variant='SECONDARY' />
                    <ProductLabel hasPromo={hasPromo} isNew={isNew} price={price} oldPrice={oldPrice} />
                </NavLink>
            </div>

            <div className="product-right-side">
                <div className='product-description-container'>
                    <ProductPrice price={price} oldPrice={oldPrice} />
                    <ProductRating reviews={reviews || 0} />

                    <div className='text-green-400 my-2'>
                        <span className='mr-1'>
                            <i className="fa-regular fa-circle-check"></i>
                        </span>
                        <span>На склад</span>
                    </div>

                    <ProductDescription title={title} path={productPath} />
                </div>

                <div className='product-add-to-cart-btn-container-vertical'>
                    <div className='flex gap-2'>
                        <div className='add-to-cart-desctop-screen'>
                            <Button
                                onClick={onAddToCart}
                                size='LG'
                                leftIcon={<Icon variant='CART' right={true} />}
                            >
                                Добави в кошницата
                            </Button>
                        </div>
                        <div className='add-to-cart-small-screen'>
                            <Button
                                onClick={onAddToCart}
                                size='SQUARE_LG'
                            >
                                {<Icon variant='CART' />}
                            </Button>
                        </div>
                        <ProductTumbnails path={modalPath} onLike={onLike} />
                    </div>
                </div>
            </div>
        </div>
    );
    
});
