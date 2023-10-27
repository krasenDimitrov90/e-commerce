import React from 'react';
import * as Variants from './SlideVariants/index';

export const Slide = React.memo((props) => {

    const VariantComponent = React.useMemo(() => {
        return Variants[props.variant] || <div>There is no {props.variant} Tumbnail Variant</div>
    }, [props.variant]);

    return (
       <VariantComponent {...props} />
    );
});

Slide.variants = {
    THUMBNAIL_LEFT: 'ThumbnailLeft',
    THUMBNAIL_BOTTOM: 'ThumbnailBottom',
};
