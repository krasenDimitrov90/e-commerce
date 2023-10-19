import React from 'react';
import { VerticalLeftTumbnail } from './VerticalLeftTumbnail/VerticalLeftTumbnail';
import { VerticalLeftCover } from './VerticalLeftCover/VerticalLeftCover';

const images = [
    '/images/Coffie1.png',
    '/images/Cotlon.png',
    '/images/frape.png',
    '/images/krem.png',
    '/images/krem.png',
];

export const VertilcalLeftWtihCover = React.memo(() => {

    const [index, setIndex] = React.useState(0);

    const handleIndex = React.useCallback((newIndex => {
        setIndex(newIndex);
    }), []);

    return (
        <div className='flex'>
            <div className='flex flex-col'>
                {images.map((img, i) => {
                    return (
                        <VerticalLeftTumbnail
                            src={img} key={'TumbnailVertical' + img}
                            onClick={handleIndex.bind(null, i)}
                            selected={i === index}
                        />
                    );
                })}
            </div>
            <VerticalLeftCover src={images[index]} />
        </div>
    );
});
