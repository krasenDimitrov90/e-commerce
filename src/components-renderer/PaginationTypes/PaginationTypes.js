import React from 'react';
import { Pagination } from '../../modules';

export const PaginationTypes = React.memo(() => {

    return (
        <div className='mt-10 flex justify-center'>
            <div >
                <Pagination variant={Pagination.variants.PRIMARY} pages={5} path='pagination' />
            </div>
        </div>
    );
});
