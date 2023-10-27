import React from 'react';
import { TumbnailSlide } from './TumbnailSlide/TumbnailSlide';
import { MainImage } from './MainImage/MainImage';


export const ThumbnailLeft = React.memo(({ images }) => {

    const [index, setIndex] = React.useState(0);

    const handleIndex = React.useCallback((newIndex => {
        setIndex(newIndex);
    }), []);

    return (
        <div className='flex'>
            <div className='flex flex-col'>
                {images.map((img, i) => {
                    return (
                        <TumbnailSlide
                            src={img} key={'TumbnailVertical' + img}
                            onClick={handleIndex.bind(null, i)}
                            selected={i === index}
                        />
                    );
                })}
            </div>
            <MainImage src={images[index]} />
        </div>
    );
});
