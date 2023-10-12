import React from 'react';
import { Button } from '../../../../Button/Button';
import { Icon } from '../../../../Icons/Icons';

export const CartPopupButtons = React.memo(() => {
    return (
        <div className="flex flex-col pb-[20px] pl-[20px] gap-[6px] mr-[28px]">
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
