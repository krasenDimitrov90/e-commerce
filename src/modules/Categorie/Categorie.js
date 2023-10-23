import React from 'react';
import * as Variants from './CategoriesVariants/index';

export const Categorie = React.memo((props) => {

    const VariantComponent = React.useMemo(() => {
        return Variants[props.variant] || <div>There is missing variant for {props.variant}</div>;
    }, [props.variant]);

    return (
        <VariantComponent {...props} />
    );
});

Categorie.variants = {
    PRIMARY: 'Primary',
};