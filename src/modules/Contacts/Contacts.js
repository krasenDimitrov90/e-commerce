import React from 'react';
import * as Variants from './ContactsVariants/index';
import './Contacts.styles.css';

export const Contacts = React.memo((props) => {

    const VariantComponent = React.useMemo(() => {
        return Variants[props.variant] || <div>There is missing variant for ${props.variant}</div>;
    }, [props.variant]);

    return (
        <VariantComponent {...props} properties={props.properties} />
    );
});

Contacts.variants = {
    PRIMARY: 'Primary',
};

Contacts.properties = {
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