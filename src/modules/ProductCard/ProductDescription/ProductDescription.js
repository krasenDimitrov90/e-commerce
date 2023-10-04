import React from 'react';
import { LinkButton } from '../../LinkButton/LinkButton';
import './ProductDescription.styles.css';

const ProductDescription = ({ title, path, cardVariant = 'horizontal' }) => {

    const size = cardVariant === 'vertical' ? 'lg' : 'base';

    return (
        <div className='product-title-container'>
            <LinkButton path={path} font='base' size={size} >{title}</LinkButton>
        </div>
    );
};

export default React.memo(ProductDescription);