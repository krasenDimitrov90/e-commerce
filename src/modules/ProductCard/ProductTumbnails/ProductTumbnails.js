import React from 'react';
import { Button } from '../../Button/Button';
import { LinkButton } from '../../LinkButton/LinkButton';
import { Icon } from '../../Icons/Icons';

import './ProductTumbnails.styles.css';

const ProductTumbnails = ({ path, onLike, variant }) => {

    const classes = ProductTumbnails.variants.variant[variant];
    const btnVariant = variant === 'horizontal' ? 'tumbnail' : 'info';

    console.log(variant)


    return (
        <div className={classes} >
            <Button
                onClick={onLike}
                variant={btnVariant}
                rounded='rounded'
                size='square-lg'
                fontSize='lg'
            >
                {<Icon variant='heart' />}
            </Button>
            <LinkButton path={path}>
                <Button
                    variant={btnVariant}
                    rounded='rounded'
                    size='square-lg'
                >
                    {<Icon variant='search' />}
                </Button>
            </LinkButton>
        </div>
    );
};

export default React.memo(ProductTumbnails);

ProductTumbnails.defaultProps = {
    variant: 'horizontal',
};

ProductTumbnails.variants = {
    variant: {
        horizontal: 'product-tumbnail-btns-container',
        vertical: 'product-tumbnail-btns-container-vertical',
    },
};