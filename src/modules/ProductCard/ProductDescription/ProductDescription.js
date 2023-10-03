import { LinkButton } from '../../LinkButton/LinkButton';
import './ProductDescription.styles.css';

const ProductDescription = ({ title, path }) => {

    return (
        <div className='product-title-container'>
            <LinkButton path={path} font='bold'>{title}</LinkButton>
        </div>
    );
};

export default ProductDescription;