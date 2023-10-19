import React from 'react';
import { Button } from '../../../../Button/Button';
import { LinkButton } from '../../../../LinkButton/LinkButton';
import { Icon } from '../../../../Icons/Icons';

import './ProductTumbnails.styles.css';

const ProductTumbnails = ({ path, onLike }) => {

    return (
        <div className='product-tumbnail-btns-container-vertical' >
            <Button
                onClick={onLike}
                variant='INFO'
                rounded='ROUNDED'
                size='SQUARE_LG'
                fontSize='LG'
            >
                {<Icon variant='HEART' />}
            </Button>
            <LinkButton path={path}>
                <Button
                    variant='INFO'
                    rounded='ROUNDED'
                    size='SQUARE_LG'
                >
                    {<Icon variant='SEARCH' />}
                </Button>
            </LinkButton>
        </div>
    );
};

export default React.memo(ProductTumbnails);

ProductTumbnails.defaultProps = {
    variant: 'HORIZONTAL',
};