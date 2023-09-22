import { Spinner } from '../Spinner/Spinner';

import './Button.styles.css';

export const Button = ({
    type,
    variant,
    size,
    upperCase,
    colors,
    leftIcon,
    rightIcon,
    children,
    onClick,
    disabled,
    isLoading }) => {

    const classes = 'btn ' + upperCase
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
    upperCase: '',
    expand: false,
    disabled: false,
    isLoading: false,
};

Button.variants = {
    variant: {
        default: 'btn-default',
        rounded: 'btn-rounded',
        sharpCorners: 'btn-sharp-corners',
        halfRounded: 'btn-half-rounded ',
        outlined: 'btn-outlined',
    },
    size: {
        xs: 'btn-xs',
        sm: 'btn-sm',
        md: 'btn-md',
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
