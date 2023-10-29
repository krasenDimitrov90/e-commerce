import React from 'react';
import * as Variants from './AccordionVariants/index';

export const Accordion = React.memo((props) => {

    const VariantComponent = React.useMemo(() => {
        return Variants[props.variant] || <div>There is missing variant for {props.variant}</div>;
    }, [props.variant]);

    return (
        <VariantComponent {...props} />
    );
});

Accordion.variants = {
    PRIMARY: 'Primary',
};