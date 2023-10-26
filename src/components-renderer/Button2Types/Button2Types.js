import React from 'react';
import { Button2 } from '../../modules';

export const Button2Types = React.memo(() => {
    return (
        <div className='m-10'>
            <Button2 variant={Button2.variants.PRIMARY}>BUTTON 2</Button2>
        </div>
    );
});
