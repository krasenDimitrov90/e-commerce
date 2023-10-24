import React from 'react';
import * as Variants from './FIlterCheckboxVariants/index'
import './FilterCheckbox.styles.css';

export const FilterCheckbox = React.memo((props) => {

    const VariantsComponent = React.useMemo(() => {
        return Variants[props.variant] || <div>There is missing variant for {props.variant}</div>;
    }, [props.variant]);

    return (
        <VariantsComponent {...props} />
    );
});

FilterCheckbox.variants = {
    PRIMARY: 'Primary',
};