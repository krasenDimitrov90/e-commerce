import { NavLink } from 'react-router-dom';

import './LinkButton.styles.css';

export const LinkButton = ({ path, variant, size, upperCase, font, openNewTab, children }) => {

    const classes = 'link-btn-container ' + upperCase
        + ' ' + LinkButton.variants.variant[variant]
        + ' ' + LinkButton.variants.fonts[font]
        + ' ' + LinkButton.variants.size[size];

    const target = openNewTab ? '_blank' : '_self';

    return (
        <div className={classes}>
            <NavLink to={path} target={target} >
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
    openNewTab: false,
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