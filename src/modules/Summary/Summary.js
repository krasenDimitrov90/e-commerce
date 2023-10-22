import React from 'react';
import * as Variants from './SummaryVariants/index';

export const Summary = React.memo((props) => {

    const VariantComponent = React.useMemo(() => {
        return Variants[props.variant] || <div>There is missing variant for {props.variant}</div>;
    }, [props.variant]);

    return (
        <VariantComponent {...props} />
    );
});

Summary.variants = {
    CART: 'Cart',
};