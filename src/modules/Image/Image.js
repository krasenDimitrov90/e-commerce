import './Image.styles.css';

import kolonka from '../../images/kolona2.jpg'
import noImage from '../../images/No-Image.svg.png';

export const Image = ({ src, alt }) => {

    return (
        <div className='image-container'>
            <img className='image' src={'awdawd'} alt={alt}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = noImage;
                }}
            />
        </div>
    );
};

Image.defaultProps = {
    alt: 'Product',
};