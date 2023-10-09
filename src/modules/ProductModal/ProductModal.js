import React from 'react';
import * as Variants from './ProductModalTypes/index';
import { Modal } from '../Modal/Modal';

export const ProductModal = (props) => {

    const VariantComponent = React.useMemo(() => {
        return props.variant ? Variants[props.variant] : Variants[ProductModal.variants.PRIMARY]
    }, [props.variant]);

    return (
        <Modal>
            {<VariantComponent {...props} />}
        </Modal>
    );
};

ProductModal.variants = {
    PRIMARY: 'Primary',
    SECONDARY: 'Secondary',
};
