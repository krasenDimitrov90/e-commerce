import { Button } from '../../Button/Button';
import { LinkButton } from '../../LinkButton/LinkButton';
import { Icon } from '../../Icons/Icons';

import './ProductTumbnails.styles.css';

const ProductTumbnails = ({ path }) => {
    return (
        <div className='product-tumbnail-btns-container'>
            <Button
                variant='tumbnail'
                rounded='rounded'
                size='square-lg'
                fontSize='lg'
            >
                {<Icon variant='heart' />}
            </Button>
            <LinkButton path={path}>
                <Button
                    variant='tumbnail'
                    rounded='rounded'
                    size='square-lg'
                >
                    {<Icon variant='search' />}
                </Button>
            </LinkButton>
        </div>
    );
};

export default ProductTumbnails;