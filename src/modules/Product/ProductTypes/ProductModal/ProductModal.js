import React from 'react';
import { Modal } from '../../../Modal/Modal';
import { TouchSpin } from '../../../TouchSpin/TouchSpin';
import { ProductModalInfo } from './ProductModalInfo/ProductModalInfo';
import { ProductModalPrice } from './ProductModalPrice/ProductModalPrice';
import { ProductModalButtons } from './ProductModalButtons/ProductModalButtons';

import { Slide } from '../../../Slide/Slide';

import './ProductModal.styles.css';

export const ProductModal = React.memo(({ product, onAddToCart, onLike }) => {
    
    return product && (
        <Modal >
            <div className='product-modal'>
                <div className='product-modal-left'>
                    <Slide variant={Slide.variants.THUMBNAIL_BOTTOM} images={[product.image, ...(product?.allImages?.slice(1) || [])]} />
                </div>
                <div className='product-modal-right'>
                    <ProductModalPrice price={product.price} oldPrice={product.oldPrice} />
                    <ProductModalInfo />

                    <div className='product-description-container-modal'>
                        <p>{product.title}</p>
                    </div>

                    <TouchSpin variant={TouchSpin.variants.PRIMARY} />

                    <ProductModalButtons onAddToCart={onAddToCart} onLike={onLike} />
                </div>
            </div>
        </Modal>
    );
});
