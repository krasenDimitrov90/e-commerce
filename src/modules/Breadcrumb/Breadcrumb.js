import React from 'react';
import * as Variants from './BreadcrumbVariants/index';

export const Breadcrumb = React.memo((props) => {

    const VariantComponent = React.useMemo(() => {
        return Variants[props.variant] || <div>There is missing variant for {props.variant}</div>;
    },[props.variant]);

    return (
        <VariantComponent {...props} />
    );
});

Breadcrumb.variants = {
    PRIMARY: 'Primary',
};
