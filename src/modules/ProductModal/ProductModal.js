import React from 'react';
import * as Variants from './ProductModalTypes/index';
import { Modal } from '../Modal/Modal';

import './ProductModal.styles.css';

export const ProductModal = () => {
    return (
        <Modal>
            {<Variants.Primary />}
        </Modal>
    );
};
