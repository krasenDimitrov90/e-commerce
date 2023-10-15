import React from 'react';
import * as Variants from './InputVariants/index';

export const Input = React.memo((props) => {

    const VariantComponent = React.useMemo(() => {
        return Variants[props.variant] || <>There is no such Input variant</>;
    }, [props.variant, props.type]);

    return (
        <VariantComponent {...props} />
    );
});

Input.variants = {
    PRIMARY: 'InputPrimary',
    PRIMARY_PASSWORD: 'InputPrimaryPassword',
    SECONDARY: 'InputSecondary',
    SECONDARY_PASSWORD: 'SecondaryPassword',
};
