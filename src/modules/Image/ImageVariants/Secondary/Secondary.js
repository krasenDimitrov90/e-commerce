import React from 'react';

import noImage from '../../../../images/No-Image.svg.png'


export const Secondary = React.memo(({ src, alt = 'Picture' }) => {
    return (
        <div className='flex flex-1 bg-white'>
            <img className='image-item' src={src} alt={alt}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = noImage;
                }}
            />
        </div>
    );
});
