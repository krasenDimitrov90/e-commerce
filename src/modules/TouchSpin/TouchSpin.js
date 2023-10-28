import React from 'react';
import * as Variants from './TouchSpinVariants/index';

export const TouchSpin = React.memo((props) => {

    const VariantComponent = React.useMemo(() => {
        return Variants[props.variant] || <div>There is missing variant for {props.variant}</div>;
    }, [props.variant]);

    return (
        <VariantComponent {...props} />
    );
});

TouchSpin.variants = {
    PRIMARY: 'Primary',
};