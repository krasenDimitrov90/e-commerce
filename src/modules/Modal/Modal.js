import React from 'react';
import './Modal.styles.css';

export const Modal = ({ children }) => {
    return (
        <div className='modal-backdrop'>
            <div className='modal-content'>
                {children}
            </div>
        </div>
    );
};
