import React from 'react';
import * as Variants from './CategorieListVariants/index';

export const CategorieList = React.memo((props) => {

    const VariantComponent = React.useMemo(() => {
        return Variants[props.variant] || <div>There is missing variant for {props.variant}</div>;
    }, [props.variant]);

    return (
        <VariantComponent {...props} />
    );
});

CategorieList.variants = {
    PRIMARY: 'Primary',
};
