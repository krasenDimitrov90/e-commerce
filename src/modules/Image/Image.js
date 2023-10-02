import './Image.styles.css';

import noImage from '../../images/No-Image.svg.png';

export const Image = ({ variant, src, alt }) => {

    const classes = 'image-container' + ' ' + Image.variants.variant[variant];

    return (
        <div className={classes}>
            {/* <div className={'image-container'} style={{backgroundImage: `url(/static/media/product.70fc2ae69e275e556fd3.png)`}}> */}
            <img className='image-item' src={src}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = noImage;
                }}
            />
        </div>
    );
};


Image.defaultProps = {
    variant: 'primary',
    alt: 'Product',
};

Image.variants = {
    variant: {
        primary: 'image-primary',
        secondary: 'image-secondary',
    }
};