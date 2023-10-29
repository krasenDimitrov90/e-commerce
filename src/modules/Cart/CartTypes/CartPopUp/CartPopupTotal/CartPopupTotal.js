import React from 'react';


export const CartPopupTotal = React.memo(({ total }) => {
    return (
        <div className="py-[20px] flex justify-between font-bold ml-[20px] mr-[28px] border-t border-t-black">
            <span className='uppercase'>Общо</span>
            <span>{total}лв</span>
        </div>
    );
});
