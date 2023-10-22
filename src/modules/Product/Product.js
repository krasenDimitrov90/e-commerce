import React from 'react';
import * as Variants from './ProductCardTypes'

export const Product = React.memo((props) => {
    let hasPromo = !!props.oldPrice;
 
    /**
     *  
     * Constructs the proper component
     * from variant options or defines Default on
     * if variant type is missing
     * 
     **/
    
    const VariantComponent = React.useMemo(() => {
        return Variants[props.variant] ? Variants[props.variant] : Variants.Default
    }, [props.variant])

    return <VariantComponent {...props} hasPromo={hasPromo} />

});


/* Defines Different constants for named export components in Product Card Types */
Product.variants = {
    CARD: 'Card',
    MODAL: 'Modal',
    ROW: 'Row',
}

Product.defaultProps = {
    variant: 'Card',
};