import React from 'react';
import * as Variants from './WizardStepVariants/index';

export const WizardStep = React.memo((props) => {

    const VariantComponent = React.useMemo(() => {
        return Variants[props.variant] || <div>There is no such WizardStep variant</div>
    }, [props.variant]);

    return (
        <VariantComponent {...props} />
    );
});

WizardStep.variants = {
    PRIMARY: 'Primary',
};