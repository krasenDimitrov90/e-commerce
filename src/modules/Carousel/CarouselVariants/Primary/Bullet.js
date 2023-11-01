import React from 'react';
import './Bullet.styles.css';

export const Bullet = React.memo(({ selected, onClick }) => {

    let classes = `carousel-primary-bullet ${selected ? 'selected' : ''}`;

    return (
        <button
            className={classes}
            onClick={onClick}
        >
        </button>
    );
});
