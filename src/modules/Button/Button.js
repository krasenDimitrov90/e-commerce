import { Spinner } from '../Spinner/Spinner';

import './Button.styles.css';

export const Button = ({
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
        + ' ' + Button.variants.variant[variant]
        + ' ' + Button.variants.rounded[rounded]
        + ' ' + Button.variants.size[size]
        + ' ' + Button.variants.fontWeight[fontWeight]
        + ' ' + Button.variants.fontSize[fontSize];

    return (
        <button className={classes} type={type} onClick={onClick} disabled={disabled || isLoading}>
            {isLoading && <Spinner size={fontSize} />}
            {leftIcon && !isLoading && leftIcon}
            {children}
            {rightIcon && rightIcon}
        </button>
    );
};

Button.defaultProps = {
    type: 'button',
    size: 'sm',
    rounded: 'not-rounded',
    fontWeight: 'base',
    fontSize: 'sm',
    upperCase: false,
    expand: false,
    disabled: false,
    isLoading: false,
};

Button.variants = {
    variant: {
        'primary': 'btn-primary',
        'secondary': 'btn-secondary',
        'info': 'btn-info',
        'dark': 'btn-dark',
        'danger': 'btn-danger',
        'outline-primary': 'btn-outline-primary',
        'outline-secondary': 'btn-outline-secondary',
        'outline-info': 'btn-outline-info',
        'outline-dark': 'btn-outline-dark',
        'outline-danger': 'btn-outline-danger',
    },
    rounded: {
        'not-rounded': '',
        'rounded': 'btn-rounded',
        'circle': 'btn-circled',
        'top-rounded': 'btn-top-rounded',
    },
    size: {
        xs: 'btn-xs',
        sm: 'btn-sm',
        base: 'btn-base',
        lg: 'btn-lg',
        xl: 'btn-xl',
        square: 'btn-square',
    },
    fontSize: {
        xs: 'btn-font-xs',
        sm: 'btn-font-sm',
        base: 'btn-font-base',
        lg: 'btn-font-lg',
        xl: 'btn-font-xl',
    },
    fontWeight: {
        sm: 'btn-font-wieght-sm',
        base: 'btn-font-wieght-base',
        bold: 'btn-font-wieght-bold',
        xl: 'btn-font-wieght-xl',
    }
};
