import './AnchorButton.css';

export const AnchorButton = ({ variant, upperCase, children }) => {

    const upperCaseClass = upperCase ? 'uppercase' : '';
    const variantClass = 'anchor-btn ' + AnchorButton.variants[variant];
    const classes = [upperCaseClass, variantClass];

    return (
        <button className={classes.join(' ')}>{children}</button>
    );
};

AnchorButton.variants = {
    'white-green': 'anchor-white-green',
    'gray-green': 'anchor-gray-green'
};

AnchorButton.defaultProps = {
    upperCase: false,
};