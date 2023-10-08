import React from 'react';
import './ProductModalTumbnails.styles.css';
import { Image } from '../../Image/Image';

const ProductModalTumbnails = ({ image, allImages }) => {

    const [index, setIdex] = React.useState(0);
    return (
        <>
            <div className='product-modal-main-image'>
                <Image src={image} />
            </div>
            <div className='product-modal-tumbnails'>
                {allImages.map(img => {
                    return (
                        <div key={img} className="product-modal-tumbnail">
                            <Image src={img} />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default React.memo(ProductModalTumbnails);