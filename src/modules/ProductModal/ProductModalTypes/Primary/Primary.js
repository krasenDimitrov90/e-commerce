import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './Primary.styles.css';

import { Image } from '../../../Image/Image';
import { Button } from '../../../Button/Button';
import { Icon } from '../../../Icons/Icons';
import { Qauantity } from '../../../Qauantity/Qauantity';

import ProductModalTumbnails from '../../ProductModalTumbnails/ProductModalTumbnails';
import ProductModalPrice from '../ProductModalPrice/ProductModalPrice';

export const Primary = React.memo(() => {

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

                <div className='text-green-400 my-2'>
                    <span className='mr-1'>
                        <i className="fa-regular fa-circle-check"></i>
                    </span>
                    <span>На склад</span>
                </div>


                <div className='product-title-container-modal'>
                    <p>{product.title}</p>
                </div>

                <Qauantity />

                <div className='product-modal-buttons'>
                    <Button
                        expand={true}
                        size='SQUARE_LG'
                        rounded='NOT_ROUNDED'
                    >
                        Добави в кошницата
                    </Button>
                    <Button
                        // onClick={onLike}
                        variant={'INFO'}
                        rounded='NOT_ROUNDED'
                        size='SQUARE_LG'
                        fontSize='LG'
                    >
                        {<Icon variant='HEART' />}
                    </Button>
                </div>
            </div>
        </div>
    );
});
