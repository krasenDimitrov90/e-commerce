import './FilterCheckbox.styles.css';

export const FilterCheckbox = ({ label }) => {

    return (
        <div className='filter-checkbox'>
            <label class="container">{label}
                <input type="checkbox" />
                    <span class="checkmark"></span>
            </label>
        </div>
    );
};