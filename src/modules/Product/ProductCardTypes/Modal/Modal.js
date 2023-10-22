import React from 'react';
import { Modal as ModalWraper } from '../../../Modal/Modal';
import { Qauantity } from '../../../Qauantity/Qauantity';
import { ProductModalInfo } from './ProductModalInfo/ProductModalInfo';
import { ProductModalPrice } from './ProductModalPrice/ProductModalPrice';
import { ProductModalTumbnails } from './ProductModalTumbnails/ProductModalTumbnails';
import { ProductModalButtons } from './ProductModalButtons/ProductModalButtons';

import './Modal.styles.css';

export const Modal = React.memo(({ product, onAddToCart, onLike }) => {

    return product && (
        <ModalWraper >
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

                    <Qauantity />

                    <ProductModalButtons onAddToCart={onAddToCart} onLike={onLike} />
                </div>
            </div>
        </ModalWraper>
    );
});
