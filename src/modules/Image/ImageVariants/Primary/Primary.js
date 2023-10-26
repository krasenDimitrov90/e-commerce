import React from 'react';

import noImage from '../../../../images/No-Image.svg.png'

export const Primary = React.memo(({ src , alt = 'Picture'}) => {
    return (
        <div className='flex flex-1 bg-gray-300'>
            <img className='w-full h-full object-contain' src={src} alt={alt}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = noImage;
                }}
            />
        </div>
    );
});
