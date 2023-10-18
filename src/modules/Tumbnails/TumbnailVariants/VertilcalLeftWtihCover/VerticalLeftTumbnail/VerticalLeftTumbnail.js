import React from 'react';
import { Image } from '../../../../Image/Image';
import './VerticalLeftTumbnail.styles.css';

export const VerticalLeftTumbnail = React.memo(({ src, onClick, selected }) => {
    return (
        <div className='pr-[10px] pb-[15px]'>
            <div
                className={`vertical-left-image-container ${selected ? 'selected' : ''}`}
                onClick={onClick}
            >
                <Image src={src} variant='SECONDARY' />
            </div>
        </div>
    );
});
