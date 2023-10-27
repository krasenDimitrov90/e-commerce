import React from 'react';
import * as Variants from './CheckboxVariants/index'

export const Checkbox = React.memo((props) => {

    const VariantsComponent = React.useMemo(() => {
        return Variants[props.variant] || <div>There is missing variant for {props.variant}</div>;
    }, [props.variant]);

    return (
        <VariantsComponent {...props} />
    );
});

Checkbox.variants = {
    PRIMARY: 'Primary',
};