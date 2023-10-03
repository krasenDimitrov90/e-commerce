import React from 'react';
import './FilterCheckbox.styles.css';

export const FilterCheckbox = React.memo(({ label }) => {

    return (
        <div className='filter-checkbox'>
            <label class="container">{label}
                <input type="checkbox" />
                    <span class="checkmark"></span>
            </label>
        </div>
    );
});