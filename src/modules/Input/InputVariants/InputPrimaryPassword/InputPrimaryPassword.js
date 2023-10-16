import React from 'react';
import { Icon } from '../../../Icons/Icons';
import './InputPrimaryPassword.styles.css';

export const InputPrimaryPassword = React.memo(({ value, onChange }) => {

    const [type, setType] = React.useState('password');
    const [icontVariant, setIcontVariant] = React.useState('EYE_SLAHED');

    const typeHandler = React.useCallback(() => {
        const newType = type === 'password' ? 'text' : 'password';
        const newVariant = icontVariant === 'EYE' ? 'EYE_SLAHED' : 'EYE';
        setType(newType);
        setIcontVariant(newVariant)
    }, [type]);

    return (
        <div className='input-primary-password-container'>
            <input
                className='input-primary-password'
                type={type}
                onChange={onChange}
                value={value}
            />
            <button className='input-primary-password-eye'
                onClick={typeHandler}
            >
                <Icon variant={icontVariant} />
            </button>
        </div>
    );
});
