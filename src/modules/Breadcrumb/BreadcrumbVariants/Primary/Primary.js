import React from 'react';
import { LinkButton } from '../../../LinkButton/LinkButton';
import { Icon } from '../../../Icons/Icons';
import './Primary.styles.css';

export const Primary = React.memo(({ items = [] }) => {
    return (
        <div className='breadcrumb-primary-container'>
            <ul className='breadcrumb-primary-list'>
                <li className='breadcrumb-primary-item-first'>
                    <LinkButton path='/' >
                        <Icon variant='HOME' right={true} />
                        Начало
                    </LinkButton>
                </li>
                {
                    items.map((item) => {
                        return (
                            <li className='breadcrumb-primary-item'>
                                <LinkButton path={item.path} >{item.name}</LinkButton>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
});
