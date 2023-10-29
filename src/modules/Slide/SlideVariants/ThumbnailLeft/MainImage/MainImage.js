import React from 'react';
import { Image } from '../../../../Image/Image';
import './MainImage.styles.css';

export const MainImage = React.memo(({ src }) => {
    return (
        <div className='slide-thumbnail-main-image-container'>
            <div className='flex w-[460px] h-[460px]'>
                <Image variant={Image.variants.PRIMARY} src={src} />
            </div>
        </div>
    );
});
