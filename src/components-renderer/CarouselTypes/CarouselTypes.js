import React from 'react';
import { Carousel } from '../../modules';


const images = [
    '/images/banner.png',
    '/images/banner2.png',
    '/images/banner3.jpg',
    '/images/banner4.png',
    '/images/banner5.jpg',
    '/images/banner6.jpg',
];


export const CarouselTypes = React.memo(() => {
    return (
        <div className='mt-10 flex justify-center'>
            <Carousel variant={Carousel.variants.PRIMARY} images={images} />
        </div>
    );
});
