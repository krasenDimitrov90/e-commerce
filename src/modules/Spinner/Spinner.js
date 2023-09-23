import './Spinner.css';

export const Spinner = ({ size }) => {

    const classes = 'loader ' + 'spinner-' + size;

    return (
        <span className={classes}></span>
    );
};



Spinner.variants = {
    size: {
        xs: 'spinner-xs',
        sm: 'spinner-sm',
        base: 'spinner-base',
        lg: 'spinner-lg',
        xl: 'spinner-xl',
    },
};