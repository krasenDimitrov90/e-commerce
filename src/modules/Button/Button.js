import { Spinner } from '../Spinner/Spinner';

import './Button.css';

export const Button = ({ 
    type,
    variant,
    classes,
    rounded,
    size,
    expand,
    leftIcon,
    rightIcon,
    children,
    onClick,
    disabled,
    isLoading }) => {

    let sizeClass = size || 'mid';
    let classNames = (classes || 'btn ' + Button.variants[variant]) + ' ' +  sizeClass + ' ' + rounded;
    classNames += expand ? ' flex-1' : '';

    return (
        <button className={classNames} type={type} onClick={onClick} disabled={disabled || isLoading}>
            {isLoading && <Spinner />}
            {leftIcon && !isLoading && leftIcon}
            {children}
            {rightIcon && rightIcon}
        </button>
    );
};

Button.defaultProps = {
    style: null,
    classes: null,
    type: 'button',
    rounded: '',
    expand: false,
    disabled: false,
    isLoading: false,
};

Button.variants = {
    'green': 'btn-green',
    'white': 'btn-white',
    'gray': 'btn-gray',
    'gray-green': 'btn-gray-green',
    'gray-blue': 'btn-gray-blue',
    'blue': 'btn-blue',
    'dark-blue': 'btn-dark-blue',
    'dark': 'btn-dark'
};