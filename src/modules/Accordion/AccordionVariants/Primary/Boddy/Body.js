import React from 'react';
import { NavLink } from 'react-router-dom';
import './Body.styles.css';

export const Body = React.memo(({ subCategories }) => {
    return (
        <ul className='categorie-list-primary'>
            {subCategories.map(subCat => {
                return (
                    <li className='categorie-list-primary-item'>
                        <NavLink to={`/products/${subCat}`} >{subCat}</NavLink>
                    </li>
                );
            })}
        </ul>
    );
});
