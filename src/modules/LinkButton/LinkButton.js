import { NavLink } from 'react-router-dom';

import './LinkButton.styles.css';

export const LinkButton = ({ path, variant, size, children }) => {

    console.log(variant)
    const classes = 'link-btn-container'
        + ' ' + LinkButton.variants.variant[variant]
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
};