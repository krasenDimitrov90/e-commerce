import React from 'react';
import * as Variants from './ImageVariants/index';

import './Image.styles.css';

export const Image = React.memo((props) => {

    const VariantComponent = React.useMemo(() => {
        return Variants[props.variant] || <div>There is missing variant for {props.variant}</div>;
    }, [props.variant]);

    return (
        <VariantComponent {...props} />
    );
});


Image.variants = {
    PRIMARY: 'Primary',
    SECONDARY: 'Secondary',
};