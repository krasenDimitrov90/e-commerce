import React from 'react';
import { Cart } from '../../modules/Cart/Cart';

export const CartTypes = React.memo(() => {
    return (
        <div>
            <Cart variant={Cart.variants.POPUP} />
        </div>
    );
});
