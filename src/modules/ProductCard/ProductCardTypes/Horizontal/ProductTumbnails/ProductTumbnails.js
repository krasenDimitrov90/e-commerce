import React from 'react';
import { Button } from '../../../../Button/Button';
import { LinkButton } from '../../../../LinkButton/LinkButton';
import { Icon } from '../../../../Icons/Icons';

import './ProductTumbnails.styles.css';

const ProductTumbnails = ({ path, onLike, variant }) => {

    const classes = ProductTumbnails.variants.variant[variant];
    const btnVariant = variant === 'HORIZONTAL' ? 'TUMBNAIL' : 'INFO';

    return (
        <div className={classes} >
            <Button
                onClick={onLike}
                variant={btnVariant}
                rounded='ROUNDED'
                size='SQUARE_LG'
                fontSize='LG'
            >
                {<Icon variant='HEART' />}
            </Button>
            <LinkButton path={path}>
                <Button
                    variant={btnVariant}
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

ProductTumbnails.variants = {
    variant: {
        HORIZONTAL: 'product-tumbnail-btns-container',
        VERTICAL: 'product-tumbnail-btns-container-vertical',
    },
};