import React from 'react';
import * as Variants from './PaginationVariants/index';

export const Pagination = React.memo((props) => {

    const VariantComponent = React.useMemo(() => {
        return Variants[props.variant] || <div>There is missing variant for {props.variant}</div>;
    },[props.variant]);

    return (
        <VariantComponent {...props} />
    );
});

Pagination.variants = {
    PRIMARY: 'Primary',
};