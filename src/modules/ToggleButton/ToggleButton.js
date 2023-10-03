import React from 'react';
import { Icon } from '../Icons/Icons';

import './ToggleButton.css';

export const ToggleButton = React.memo(({ defaultIcon, toggledIcon, onCLick }) => {

    const [isToggled, setIsToggled] = React.useState(false);

    const toggleHandler = () => {
        onCLick();
        setIsToggled(prev => !prev);
    }

    return (
        <button className='toggle-btn' onClick={toggleHandler}>
            {!isToggled && <Icon variant={defaultIcon} />}
            {isToggled && <Icon variant={toggledIcon} />}
        </button>
    );
});