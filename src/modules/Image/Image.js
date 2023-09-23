import './Image.styles.css';

import kolonka from '../../images/kolona2.jpg'

export const Image = ({ src, alt }) => {

    const path = '../../images/' + src;

    return (
        <div className='image-container'>
            <img className='image' src={kolonka}  alt={alt} />
        </div>
    );
};

Image.defaultProps = {
    alt: 'Product image',
};