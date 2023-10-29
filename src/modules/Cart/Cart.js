import React from 'react';
import * as Variants from './CartTypes/index';

export const Cart = (props) => {

    const VariantComponent = React.useMemo(() => {
        return Variants[props.variant] ? Variants[props.variant] : Variants.Default;
    }, [props.variant]);

    return (
       <VariantComponent {...props} />
    );
};

Cart.variants = {
    POPUP: 'CartPopUp',
    TABLE: 'CartTable',
};
