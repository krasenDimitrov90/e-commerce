import { Spinner } from '../Spinner/Spinner';

import './Button.css';

export const Button = ({
    type,
    variant,
    custom,
    rounded,
    size,
    contentSize,
    expand,
    leftIcon,
    rightIcon,
    children,
    onClick,
    disabled,
    isLoading }) => {

    const contentSizeClass = contentSize || size || 'btn-content-small';
    const sizeClass = size || 'btn-mid';
    const expandedClass = expand ? ' flex-1' : '';
    const variantClass = (custom || 'btn ' + Button.variants[variant])
    const classes = [variantClass, contentSizeClass, sizeClass, expandedClass, rounded];

    return (
        <button className={classes.join(' ')} type={type} onClick={onClick} disabled={disabled || isLoading}>
            {isLoading && <Spinner />}
            {leftIcon && !isLoading && leftIcon}
            {children}
            {rightIcon && rightIcon}
        </button>
    );
};

Button.defaultProps = {
    custom: null,
    type: 'button',
    rounded: '',
    expand: false,
    disabled: false,
    isLoading: false,
};

Button.variants = {
    'green': 'btn-green',
    'white-green': 'btn-white-green',
    'gray-green': 'btn-gray-green',
    'gray-blue': 'btn-gray-blue',
    'blue': 'btn-blue',
    'blue-green': 'btn-blue-green',
    'dark-blue': 'btn-dark-blue',
    'dark-green': 'btn-dark-green',
};