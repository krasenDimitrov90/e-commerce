import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../../Icons/Icons';
import './Primary.styles.css';

export const Primary = React.memo(() => {
    return (
            <ul className='pagination-primary-list'>
                <li className='pagination-primary-link-previous'>
                    <Icon variant='ARROW_LEFT' />
                </li>
                <li >
                    <NavLink
                        to={'/pagination'}
                        className='pagination-primary-link'
                    >1</NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/pagination/2'}
                        className='pagination-primary-link'
                    >2</NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/pagination/3'}
                        className='pagination-primary-link'
                    >3</NavLink>
                </li>
                <li className='pagination-primary-link-next' >
                    <Icon variant='ARROW_RIGHT' />
                </li>
            </ul>
    );
});
