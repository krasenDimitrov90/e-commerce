import React from 'react';
import { Tumbnails } from '../../modules';

export const TumbnailsType = React.memo(() => {

    const variant = Tumbnails.variants.VERTICAL_LEFT_WITH_COVER;

    return (
        <div className='mt-10'>
            <Tumbnails variant={variant} />
        </div>
    );
});
