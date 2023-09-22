import { NavLink } from 'react-router-dom';

import './LinkButton.styles.css';

export const LinkButton = ({ path, variant, children }) => {

    console.log(variant)
    const classes = 'link-btn-container ' + LinkButton.variants.variant[variant];

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
}

LinkButton.variants = {
    variant: {
        primary: 'link-primary',
        secondary: 'link-secondary',
    },
};