import React from 'react';
import { NavLink } from 'react-router-dom';

import ProductPrice from './ProductPrice/ProductPrice';
import ProductRating from './ProductRating/ProductRating';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductTumbnails from './ProductTumbnails/ProductTumbnails';
import ProductLabel from './ProductLabel/ProductLabel';

import { Image } from '../Image/Image';
import { Button } from '../Button/Button';
import { Icon } from '../Icons/Icons';

import './ProductCard.styles.css';

export const ProductCard = React.memo(({
    variant,
    title,
    image,
    productPath,
    modalPath,
    price,
    oldPrice,
    isNew,
    onLike,
    onAddToCart
}) => {

    let hasPromo = !!oldPrice;

    if (variant === 'horizontal') {
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
    } else if (variant === 'vertical') {

        return (
            <div className='product-container-vertical'>
                <div className='product-image-wrap'>
                    <NavLink to={productPath} className='product-image-container'>
                        <Image src={image} variant='secondary' />
                        <ProductLabel hasPromo={hasPromo} isNew={isNew} price={price} oldPrice={oldPrice} />
                    </NavLink>
                </div>

                <div className="product-right-side">
                    <div className='product-description-container'>
                        <ProductPrice price={price} oldPrice={oldPrice} cardVariant='vertical' />
                        <ProductRating reviews={10} />

                        <div className='text-green-400 my-2'>
                            <span className='mr-1'>
                                <i class="fa-regular fa-circle-check"></i>
                            </span>
                            <spna>На склад</spna>
                        </div>

                        <ProductDescription title={title} path={productPath} cardVariant='vertical' />
                    </div>

                    <div className='product-add-to-cart-btn-container-vertical'>
                        <div className='flex gap-2'>
                            <div className='add-to-cart-desctop-screen'>
                                <Button
                                    onClick={onAddToCart}
                                    variant='dark'
                                    size='lg'
                                    leftIcon={<Icon variant='cart' right={true} />}
                                >
                                    Добави в кошницата
                                </Button>
                            </div>
                            <div className='add-to-cart-small-screen'>
                                <Button
                                    onClick={onAddToCart}
                                    // variant='dark'
                                    size='square-lg'
                                >
                                    {<Icon variant='cart' />}
                                </Button>
                            </div>
                            <ProductTumbnails path={modalPath} onLike={onLike} variant='vertical' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});

ProductCard.defaultProps = {
    variant: 'horizontal',
};