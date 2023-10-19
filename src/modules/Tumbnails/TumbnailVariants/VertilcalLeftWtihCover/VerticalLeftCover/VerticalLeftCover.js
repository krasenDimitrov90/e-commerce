import React from 'react';
import { Image } from '../../../../Image/Image';
import './VerticalLeftCover.styles.css';

export const VerticalLeftCover = React.memo(({ src }) => {
    return (
        <div className='vertical-cover-image-container'>
            <div className='flex w-[460px] h-[460px]'>
                <Image src={src} />
            </div>
        </div>
    );
});
