import React from 'react';
import './ProductModalTumbnails.styles.css';
import { Image } from '../../Image/Image';

const ProductModalTumbnails = ({ allImages }) => {

    const [index, setIndex] = React.useState(0);

    const handleIndex = React.useCallback((newIndex) => {
        setIndex(newIndex || 0);
    }, []);

    return (
        <>
            <div className='product-modal-main-image'>
                <Image src={allImages[index]} />
            </div>
            <div className='product-modal-tumbnails'>
                {allImages.map((img, i) => {
                    return (
                        <div
                            className={`product-modal-tumbnail ${index === i ? 'selected' : ''}`}
                            onClick={handleIndex.bind(null, i)} key={img + i}
                        >
                            <Image src={img} />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default React.memo(ProductModalTumbnails);