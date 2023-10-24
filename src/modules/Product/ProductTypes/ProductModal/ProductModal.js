import React from 'react';
import { Modal } from '../../../Modal/Modal';
import { Quantity } from '../../../Quantity/Quantity';
import { ProductModalInfo } from './ProductModalInfo/ProductModalInfo';
import { ProductModalPrice } from './ProductModalPrice/ProductModalPrice';
import { ProductModalTumbnails } from './ProductModalTumbnails/ProductModalTumbnails';
import { ProductModalButtons } from './ProductModalButtons/ProductModalButtons';

import './ProductModal.styles.css';

export const ProductModal = React.memo(({ product, onAddToCart, onLike }) => {

    console.log({product})
    
    return product && (
        <Modal >
            <div className='product-modal'>
                <div className='product-modal-left'>
                    <ProductModalTumbnails allImages={[product.image, ...(product?.allImages?.slice(1) || [])]} />
                </div>
                <div className='product-modal-right'>
                    <ProductModalPrice price={product.price} oldPrice={product.oldPrice} />
                    <ProductModalInfo />

                    <div className='product-description-container-modal'>
                        <p>{product.title}</p>
                    </div>

                    <Quantity variant={Quantity.variants.PRIMARY} />

                    <ProductModalButtons onAddToCart={onAddToCart} onLike={onLike} />
                </div>
            </div>
        </Modal>
    );
});
