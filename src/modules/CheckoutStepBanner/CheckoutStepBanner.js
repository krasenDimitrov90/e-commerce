import React from 'react';
import * as Variants from './CheckoutStepBannerVariants/index';

export const CheckoutStepBanner = React.memo((props) => {

    const VariantComponent = React.useMemo(() => {
        return Variants[props.variant] || <div>There is no such CheckoutStepBanner variant</div>
    }, [props.variant]);

    return (
        <VariantComponent {...props} />
    );
});

CheckoutStepBanner.variants = {
    PRIMARY: 'Primary',
};
