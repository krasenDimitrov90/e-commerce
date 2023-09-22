import { Spinner } from '../Spinner/Spinner';

import './Button.styles.css';

export const Button = ({
    type,
    variant,
    size,
    rounded,
    font,
    upperCase,
    leftIcon,
    rightIcon,
    children,
    onClick,
    disabled,
    isLoading }) => {

    const classes = 'btn ' + upperCase
        + ' ' + Button.variants.variant[variant]
        + ' ' + Button.variants.rounded[rounded]
        + ' ' + Button.variants.size[size]
        + ' ' + Button.variants.fonts[font];

    return (
        <button className={classes} type={type} onClick={onClick} disabled={disabled || isLoading}>
            {isLoading && <Spinner />}
            {leftIcon && !isLoading && leftIcon}
            {children}
            {rightIcon && rightIcon}
        </button>
    );
};

Button.defaultProps = {
    type: 'button',
    size: 'base',
    rounded: 'not-rounded',
    font: 'base',
    upperCase: '',
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
    },
    fonts: {
        sm: 'btn-font-wieght-sm',
        base: 'btn-font-wieght-base',
        bold: 'btn-font-wieght-bold',
        xl: 'btn-font-wieght-xl',
    }
};
