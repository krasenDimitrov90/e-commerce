import React from 'react';
import * as Variants from './TumbnailVariants/index';

export const Tumbnails = React.memo((props) => {

    const VariantComponent = React.useMemo(() => {
        return Variants[props.variant] || <div>There is no {props.variant} Tumbnail Variant</div>
    }, [props.variant]);

    return (
       <VariantComponent {...props} />
    );
});

Tumbnails.variants = {
    VERTICAL_LEFT_WITH_COVER: 'VertilcalLeftWtihCover',
};
