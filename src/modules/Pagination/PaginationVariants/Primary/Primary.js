import React from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../../Icons/Icons';
import './Primary.styles.css';

export const Primary = React.memo(({ pages, path }) => {

    const params = useParams();
    const currentPage = params.page;

    return (
        <ul className='pagination-primary-list'>
            {
                currentPage > 1 && pages > 1 &&
                <li>
                    <NavLink
                        className='pagination-primary-link-previous'
                        to={`/${path}/${currentPage - 1}`}
                    >
                        <Icon variant='ARROW_LEFT' />
                    </NavLink>
                </li>
            }
            {
                Array.from({ length: pages }, (v, k) => k + 1).map(page => {
                    return (
                        <li key={`pagination-${page}`}>
                            <NavLink
                                to={`/${path}/${page}`}
                                className='pagination-primary-link'
                            >
                                {page}
                            </NavLink>
                        </li>
                    );
                })
            }
            {
                currentPage < pages && pages > 1 &&
                <li>
                    <NavLink
                        className='pagination-primary-link-next'
                        to={`/${path}/${Number(currentPage) + 1}`}
                    >
                        <Icon variant='ARROW_RIGHT' />
                    </NavLink>
                </li>
            }

        </ul>
    );
});
