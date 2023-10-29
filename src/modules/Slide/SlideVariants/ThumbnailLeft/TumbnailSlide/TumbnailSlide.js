import React from 'react';
import { Image } from '../../../../Image/Image';
import './TumbnailSlide.styles.css';

export const TumbnailSlide = React.memo(({ src, onClick, selected }) => {
    return (
        <div className='pr-[10px] pb-[15px]'>
            <div
                className={`thumbnail-slide-image-container ${selected ? 'selected' : ''}`}
                onClick={onClick}
            >
                <Image variant={Image.variants.PRIMARY} src={src} />
            </div>
        </div>
    );
});
