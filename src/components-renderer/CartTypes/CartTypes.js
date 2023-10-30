import React from 'react';
import { Cart } from '../../modules';

export const CartTypes = React.memo(() => {

    const [type, setType] = React.useState(Cart.variants.POPUP);

    const handleType = React.useCallback(() => {
        let newType = type === Cart.variants.POPUP ? Cart.variants.TABLE : Cart.variants.POPUP;
        setType(newType)
    },[type]);

    const onQuantityChange = React.useCallback((qty) => {
        console.log(qty);
    }, []);

    return (
        <div className='mt-10 w-[100vw]'>
            <div>
                <button onClick={handleType} className='bg-green-200 m-2 rounded p-1 text-white'>Cart Type: {type}</button>
            </div>
            <Cart variant={type} onQuantityChange={onQuantityChange} />
        </div>
    );
});
