import { Spinner } from '../Spinner/Spinner';

import './Button.styles.css';

export const Button = ({
    type,
    variant,
    size,
    rounded,
    upperCase,
    colors,
    leftIcon,
    rightIcon,
    children,
    onClick,
    disabled,
    isLoading }) => {

    const classes = 'btn ' + upperCase
        + ' ' + Button.variants.rounded[rounded]
        + ' ' + Button.variants.variant[variant]
        + ' ' + Button.variants.size[size]
        + ' ' + Button.variants.colors[colors];

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
        'half-rounded': 'btn-half-rounded',
    },
    size: {
        xs: 'btn-xs',
        sm: 'btn-sm',
        base: 'btn-base',
        lg: 'btn-lg',
        xl: 'btn-xl',
    },
    colors: {
        green: 'btn-green',
        whiteGreen: 'btn-white-green',
        grayGreen: 'btn-gray-green',
        blueGreen: 'btn-blue-green',
        darkGreen: 'btn-dark-green',
        grayBlue: 'btn-gray-blue',
        darkBlue: 'btn-dark-blue',
        blue: 'btn-blue',
        red: 'btn-red',
    }
};
