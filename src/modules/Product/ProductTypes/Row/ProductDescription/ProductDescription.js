import React from 'react';
import { LinkButton } from '../../../../LinkButton/LinkButton';
import './ProductDescription.styles.css';

const ProductDescription = ({ title, path }) => {

    return (
        <div className='product-title-container-vertical'>
            <LinkButton path={path} font='base' size='lg' >{title}</LinkButton>
        </div>
    );
};

export default React.memo(ProductDescription);