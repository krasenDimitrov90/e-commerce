import React from 'react';
import { Button } from '../../../../../Button/Button';
import { Icon } from '../../../../../Icons/Icons';
import './ProductModalButtons.styles.css';

export const ProductModalButtons = React.memo(({ onAddToCart, onLike }) => {
    return (
        <div className='product-modal-buttons'>
            <Button
                expand={true}
                size='SQUARE_LG'
                rounded='NOT_ROUNDED'
                onClick={onAddToCart}
            >
                Добави в кошницата
            </Button>
            <Button
                variant={'INFO'}
                rounded='NOT_ROUNDED'
                size='SQUARE_LG'
                fontSize='LG'
                onClick={onLike}
            >
                {<Icon variant='HEART' />}
            </Button>
        </div>
    );
});
