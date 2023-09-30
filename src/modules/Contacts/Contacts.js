import { Icon } from '../Icons/Icons';
import './Contacts.styles.css';

export const Contacts = ({ variant, info }) => {

    const { title, icon } = Contacts.variants.variant[variant];

    return (
        <div className='contacts'>
            <div className='contacts-icon'>
                <Icon variant={icon} />
            </div>
            <div className='contacts-content'>
                <span className='contacts-content-title'>{title} : </span>
                <span className='contacts-content-info'>{info}</span>
            </div>
        </div>
    );
};

Contacts.variants = {
    variant: {
        mail: {
            title: 'Емайл',
            icon: 'mail',
        },
        phone: {
            title: 'Телефон',
            icon: 'phone',
        },
    }
}