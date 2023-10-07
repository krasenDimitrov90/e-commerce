import React from 'react';
import { Icon } from '../Icons/Icons';
import './Contacts.styles.css';

export const Contacts = React.memo(({ variant, info }) => {

    const { title, icon, href } = Contacts.variants[variant];

    return (
        <div className='contacts'>
            <div className='contacts-icon'>
                <Icon variant={icon} />
            </div>
            <div className='contacts-content'>
                <span className='contacts-content-title'>{title} :&nbsp;</span>
                <div>
                    <a className='contacts-content-info' href={`${href}:${info}`}>{info}</a>

                </div>
            </div>
        </div>
    );
});

Contacts.variants = {
    MAIL: {
        title: 'Имейл',
        icon: 'mail',
        href: 'mailto',
    },
    PHONE: {
        title: 'Телефон',
        icon: 'phone',
        href: 'tel',
    },
}