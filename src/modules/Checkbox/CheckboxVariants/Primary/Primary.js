import React from 'react';
import './Primary.styles.css';

export const Primary = React.memo(({ label }) => {

    return (
        <div className='checkbox-primary-wraper'>
            <label className="checkbox-primary-container">{label}
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
        </div>
    );
});
