import React from 'react';
import * as Variants from './TableTitleVariants/index';

export const TableTitle = React.memo((props) => {

    const VariantsComponent = React.useMemo(() => {
        return Variants[props.variant] || <div>There is missing variant for {props.variant}</div>;
    }, [props.variant]);

    return (
        <VariantsComponent {...props} />
    );
});

TableTitle.variants = {
    CART: 'Cart',
};