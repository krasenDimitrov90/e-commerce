import React from 'react';
import './Primary.styles.css';

export const Primary = React.memo(({label}) => {
    return (
        <div className='filter-checkbox-primary-wraper'>
            <label class="filter-checkbox-primary-container">{label}
                <input type="checkbox" />
                <span class="checkmark"></span>
            </label>
        </div>
    );
});
