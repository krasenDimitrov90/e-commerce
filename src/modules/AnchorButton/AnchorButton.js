import './AnchorButton.css';

export const AnchorButton = ({ variant, upperCase, thin = false, children }) => {

    const upperCaseClass = upperCase ? 'uppercase' : '';
    const variantClass = 'anchor-btn ' + AnchorButton.variants[variant];
    const thinClass = thin ? 'thin' : '';
    const classes = [upperCaseClass, variantClass, thinClass];

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