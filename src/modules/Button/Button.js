import React from 'react';
import { Spinner } from '../Spinner/Spinner';

import './Button.styles.css';

export const Button = React.memo(({
    type,
    variant,
    rounded,
    size,
    fontWeight,
    fontSize,
    upperCase,
    expand,
    leftIcon,
    rightIcon,
    children,
    onClick,
    disabled,
    isLoading }) => {

    const expanded = expand ? ' flex-1 ' : ' ';
    const uppercase = upperCase ? ' uppercase ' : ' ';

    const classes = 'btn ' + expanded + uppercase
        + ' ' + Button.variants[variant]
        + ' ' + Button.styles.rounded[rounded]
        + ' ' + Button.styles.size[size]
        + ' ' + Button.styles.fontWeight[fontWeight]
        + ' ' + Button.styles.fontSize[fontSize];

    return (
        <button className={classes} type={type} onClick={onClick} disabled={disabled || isLoading}>
            {isLoading && <Spinner size={fontSize} />}
            {leftIcon && !isLoading && leftIcon}
            {children}
            {rightIcon && rightIcon}
        </button>
    );
});

Button.defaultProps = {
    type: 'button',
    variant: 'PRIMARY',
    size: 'BASE',
    rounded: 'ROUNDED',
    fontWeight: 'BASE',
    fontSize: 'BASE',
    upperCase: false,
    expand: false,
    disabled: false,
    isLoading: false,
};

Button.variants = {
    PRIMARY: 'btn-primary',
    SECONDARY: 'btn-secondary',
    TUMBNAIL: 'btn-tumbnail',
    INFO: 'btn-info',
    DARK: 'btn-dark',
    DANGER: 'btn-danger',
    OUTLINE_PRIMARY: 'btn-outline-primary',
    OUTLINE_SECONDARY: 'btn-outline-secondary',
    OUTLINE_INFO: 'btn-outline-info',
    OUTLINE_DARK: 'btn-outline-dark',
    OUTLINE_DANGER: 'btn-outline-danger',
};

Button.styles = {
    rounded: {
        NOT_ROUNDED: '',
        ROUNDED: 'btn-rounded',
        CIRCLED: 'btn-circled',
        TOP_ROUNDED: 'btn-top-rounded',
    },
    size: {
        XS: 'btn-xs',
        SM: 'btn-sm',
        BASE: 'btn-base',
        LG: 'btn-lg',
        XL: 'btn-xl',
        SQUARE_XS: 'btn-square-xs',
        SQUARE_SM: 'btn-square-sm',
        SQUARE_BASE: 'btn-square-base',
        SQUARE_LG: 'btn-square-lg',
        SQUARE_XL: 'btn-square-xl',
    },
    fontSize: {
        XS: 'btn-font-xs',
        SM: 'btn-font-sm',
        BASE: 'btn-font-base',
        LG: 'btn-font-lg',
        XL: 'btn-font-xl',
    },
    fontWeight: {
        SM: 'btn-font-wieght-sm',
        BASE: 'btn-font-wieght-base',
        BOLD: 'btn-font-wieght-bold',
        XL: 'btn-font-wieght-xl',
    }
};
