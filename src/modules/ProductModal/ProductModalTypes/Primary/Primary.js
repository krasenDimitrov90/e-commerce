import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './Primary.styles.css';

import { Image } from '../../../Image/Image';
import { Button } from '../../../Button/Button';
import { Icon } from '../../../Icons/Icons';
import ProductModalTumbnails from '../../ProductModalTumbnails/ProductModalTumbnails';

export const Primary = React.memo(() => {

    const { productId } = useParams();
    const [product, setProduct] = React.useState({});

    React.useEffect(() => {
        fetch('/products.json')
            .then(prods => prods.json())
            .then(prods => {
                setProduct(prods.find(p => p.id === productId));
            })
            .catch(err => setProduct({}))
    }, []);


    return (
        <div className='product-modal'>
            <div className='product-modal-left'>
                <ProductModalTumbnails image={product.image} allImages={product.allImages || []}/>
            </div>
            <div className='product-modal-right'>

            </div>
        </div>
    );
});
