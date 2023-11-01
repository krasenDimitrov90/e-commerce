import React from 'react';
import * as Variants from './CarouselVariants/index';

export const Carousel = React.memo((props) => {

    const VariantComponent = React.useMemo(() => {
        return Variants[props.variant] || <div>There is missing variant for {props.variant}</div>;
    }, [props.variant]);

    return (
        <VariantComponent {...props} />
    );
});

Carousel.variants = {
    PRIMARY: 'Primary',
};
