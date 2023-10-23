import React from 'react';
import { Categorie } from '../../modules';

export const CategoriesTypes = React.memo(() => {
    return (
        <div className='mt-10 p-3 flex w-[300px]'>
            <Categorie variant={Categorie.variants.PRIMARY} />
        </div>
    );
});
