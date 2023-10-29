import React from 'react';
import { Icon } from '../../../Icons/Icons';
import './InputSecondaryPassword.styles.css';

export const InputSecondaryPassword = React.memo(({ value, onChange, placeholder }) => {

    const [type, setType] = React.useState('password');
    const [icontVariant, setIcontVariant] = React.useState('EYE_SLAHED');

    const typeHandler = React.useCallback(() => {
        const newType = type === 'password' ? 'text' : 'password';
        const newVariant = icontVariant === 'EYE' ? 'EYE_SLAHED' : 'EYE';
        setType(newType);
        setIcontVariant(newVariant)
    }, [type]);

    return (
        <div className='input-secondary-password-container'>
            <div className='input-secondary-password-icon'>
                <Icon variant='UNLOCK' />
                <div className='input-secondary-password-arrow'>
                    <Icon variant='ARROW_RIGHT' />
                </div>
            </div>
            <input
                className='input-secondary-password'
                type={type || 'text'}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
            />
            <button className='input-secondary-password-eye'
                onClick={typeHandler}
            >
                <Icon variant={icontVariant} />
            </button>
        </div>
    );
});
