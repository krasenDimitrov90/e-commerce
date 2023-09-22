import { NavLink } from 'react-router-dom';

import './LinkButton.styles.css';

export const LinkButton = ({ path, variant, size, upperCase, font, children }) => {

    console.log(variant)
    const classes = 'link-btn-container ' + upperCase
        + ' ' + LinkButton.variants.variant[variant]
        + ' ' + LinkButton.variants.fonts[font]
        + ' ' + LinkButton.variants.size[size];

    return (
        <div className={classes}>
            <NavLink to={path}>
                {children}
            </NavLink>
        </div>
    );

};

LinkButton.defaultProps = {
    variant: 'primary',
    path: '#',
    size: 'base',
    upperCase: '',
    font: 'base',
}

LinkButton.variants = {
    variant: {
        primary: 'link-primary',
        secondary: 'link-secondary',
    },
    size: {
        xs: 'link-xs',
        sm: 'link-sm',
        base: 'link-base',
        lg: 'link-lg',
        xl: 'link-xl',
    },
    fonts: {
        sm: 'link-font-wieght-sm',
        base: 'link-font-wieght-base',
        bold: 'link-font-wieght-bold',
        xl: 'link-font-wieght-xl',
    },
};