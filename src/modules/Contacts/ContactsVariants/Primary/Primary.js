import React from 'react';
import { Icon } from '../../../Icons/Icons';
import './Primary.styles.css';

export const Primary = React.memo(({ properties, info }) => {
    const { title, icon, href } = properties;

    return (
        <div className='contacts-primary'>
            <div className='contacts-primary-icon'>
                <Icon variant={icon} />
            </div>
            <div className='contacts-primary-content'>
                <span className='contacts-primary-content-title'>{title} :&nbsp;</span>
                <div>
                    <a className='contacts-primary-content-info' href={`${href}:${info}`}>{info}</a>

                </div>
            </div>
        </div>
    );
});
