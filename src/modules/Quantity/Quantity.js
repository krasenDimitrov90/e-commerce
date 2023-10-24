import React from 'react';
import * as Variants from './QuantityVariants/index';

export const Quantity = React.memo((props) => {

    const VariantComponent = React.useMemo(() => {
        return Variants[props.variant] || <div>There is missing variant for {props.variant}</div>;
    }, [props.variant]);

    return (
        <VariantComponent {...props} />
    );
});

Quantity.variants = {
    PRIMARY: 'Primary',
};