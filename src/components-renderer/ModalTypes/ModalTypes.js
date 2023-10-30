import React from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../modules';

export const ModalTypes = React.memo(() => {

    const { productId } = useParams();
    const [product, setProduct] = React.useState(null);

    const onQuantityChange = React.useCallback((value) => console.log(value), []);

    React.useEffect(() => {
        fetch('/products.json')
            .then(prods => prods.json())
            .then(prods => {
                setProduct(prods.find(p => p.id === productId));
            })
            .catch(err => setProduct({}))
    }, []);

    return (
        <Product product={product} variant={Product.variants.MODAL} onQuantityChange={onQuantityChange} />
    );
});
