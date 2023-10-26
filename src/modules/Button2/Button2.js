import React from 'react';
import * as Variants from './Button2Types/index';
import { Spinner } from '../Spinner/Spinner';

export const Button2 = React.memo((props) => {

    const { isLoading, leftIcon, rightIcon, children, fontSize } = props;

    const VariantComponent = React.useMemo(() => {
        return Variants[props.variant] || <div>There is missing variant for {props.variant}</div>;
    }, [props.variant]);

    return (
        <VariantComponent {...props}>
            {isLoading && <Spinner size={'BASE'} />}
            {leftIcon && !isLoading && leftIcon}
            {children}
            {rightIcon && rightIcon}
        </VariantComponent>
    );
});

Button2.defaultProps = {
    isLoading: true,
    leftIcon: null,
    rightIcon: null,
};


Button2.variants = {
    PRIMARY: 'Primary',
};
