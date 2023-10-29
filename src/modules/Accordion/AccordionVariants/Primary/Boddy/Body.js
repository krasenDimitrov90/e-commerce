import React from 'react';
import { NavLink } from 'react-router-dom';
import './Body.styles.css';

export const Body = React.memo(({ subCategories }) => {
    return (
        <ul className='accordion-primary-list'>
            {subCategories.map(subCat => {
                return (
                    <li className='accordion-primary-list-item'>
                        <NavLink to={`/products/${subCat}`} >{subCat}</NavLink>
                    </li>
                );
            })}
        </ul>
    );
});
