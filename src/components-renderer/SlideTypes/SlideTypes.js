import React from 'react';
import { Slide } from '../../modules';

const images = [
    '/images/Coffie1.png',
    '/images/Cotlon.png',
    '/images/frape.png',
    '/images/krem.png',
    '/images/krem.png',
];

export const SlideTypes = React.memo(() => {


    return (
        <div className='mt-10'>
            <Slide variant={Slide.variants.THUMBNAIL_LEFT} images={images} />
            <Slide variant={Slide.variants.THUMBNAIL_BOTTOM} images={images} />
        </div>
    );
});
