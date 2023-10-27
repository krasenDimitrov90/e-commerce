import React from 'react';
import { Image } from '../../../Image/Image';
import './ThumbnailBottom.styles.css';

export const ThumbnailBottom = React.memo(({ images = []}) => {
    const [index, setIndex] = React.useState(0);

    const handleIndex = React.useCallback((newIndex) => {
        setIndex(newIndex || 0);
    }, []);

    return (
        <>
            <div className='thumbnail-bottom-main-image'>
                <Image variant={Image.variants.PRIMARY} src={images[index]} />
            </div>
            <div className='thumbnail-bottom-sliders'>
                {images.map((img, i) => {
                    return (
                        <div
                            className={`thumbnail-bottom-slide ${index === i ? 'selected' : ''}`}
                            onClick={handleIndex.bind(null, i)} key={img + i}
                        >
                            <Image variant={Image.variants.PRIMARY} src={img} />
                        </div>
                    );
                })}
            </div>
        </>
    );
});
