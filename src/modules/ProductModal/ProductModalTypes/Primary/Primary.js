import React from 'react';
import { useParams } from 'react-router-dom';
import { Qauantity } from '../../../Qauantity/Qauantity';
import { ProductModalInfo, ProductModalPrice, ProductModalTumbnails, ProductModalButtons } from './PrimaryComponents/index';
import './Primary.styles.css';

export const Primary = React.memo(({ onAddToCart, onLike }) => {

    const { productId } = useParams();
    const [product, setProduct] = React.useState(null);

    React.useEffect(() => {
        fetch('/products.json')
            .then(prods => prods.json())
            .then(prods => {
                setProduct(prods.find(p => p.id === productId));
            })
            .catch(err => setProduct({}))
    }, []);


    return product && (
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
    );
});
