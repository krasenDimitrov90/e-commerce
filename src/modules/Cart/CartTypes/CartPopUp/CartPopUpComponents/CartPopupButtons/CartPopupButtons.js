import React from 'react';
import { Button } from '../../../../../Button/Button';
import { Icon } from '../../../../../Icons/Icons';
import './CartPopupButtons.styles.css';

export const CartPopupButtons = React.memo(() => {
    return (
        <div className="cart-popup-buttons-container">
            <Button
                variant='DARK'
                size='XL'
                fontWeight='BOLD'
                upperCase={true}
                leftIcon={<Icon variant={'CHECK_SQUARE'} right={true} />}
            >
                Към поръчката
            </Button>
            <Button
                variant='INFO'
                size='XL'
                fontWeight='BOLD'
                upperCase={true}
            >
                Количка
            </Button>
        </div>
    );
});
