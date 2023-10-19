import React from 'react';
import { LinkButton } from '../../../../LinkButton/LinkButton';
import './ProductDescription.styles.css';

const ProductDescription = ({ title, path }) => {

    return (
        <div className='product-title-container-horizontal'>
            <LinkButton path={path} font='base' size='base' >{title}</LinkButton>
        </div>
    );
};

export default React.memo(ProductDescription);