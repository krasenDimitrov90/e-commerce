import React from 'react';
import './ProductModalInfo.styles.css';

export const ProductModalInfo = React.memo(() => {
    return (
        <div className='text-green-400 my-2'>
            <span className='mr-1'>
                <i className="fa-regular fa-circle-check"></i>
            </span>
            <span>На склад</span>
        </div>
    );
});

// export default React.memo(ProductModalInfo);