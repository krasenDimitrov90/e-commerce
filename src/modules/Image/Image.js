import './Image.styles.css';

import noImage from '../../images/No-Image.svg.png';
import React from 'react';

export const Image = React.memo(({ variant, src, alt }) => {

    const classes = 'image-container' + ' ' + Image.variants[variant];

    return (
        <div className={classes}>
            {/* <div className={'image-container'} style={{backgroundImage: `url(/static/media/product.70fc2ae69e275e556fd3.png)`}}> */}
            <img className='image-item' src={src} alt={alt}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = noImage;
                }}
            />
        </div>
    );
});


Image.defaultProps = {
    variant: 'PRIMARY',
    alt: 'Product',
};

Image.variants = {
    PRIMARY: 'image-primary',
    SECONDARY: 'image-secondary',
};