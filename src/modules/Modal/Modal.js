import React from 'react';
import { useBeforeUnload, useNavigate } from 'react-router-dom';

import './Modal.styles.css';

export const Modal = React.memo(({ children }) => {

    const navigate = useNavigate();

    const goBackHandler = React.useCallback(() => {
        navigate(-1);
    },[]);

    return (
        <div className='modal-backdrop'>
            <div onClick={goBackHandler} className="modal-overlay"></div>
            <div className='modal-content'>
                {children}
            </div>
        </div>
    );
});
