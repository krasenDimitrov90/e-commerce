import React from 'react';
import { Breadcrumb } from '../../modules';

const items = [
    {name: 'Телефони', path: '/telephones'},
    {name: 'Iphone', path: '/telephones/iphone'},
];

export const BreadcrumbTypes = React.memo(() => {
    return (
        <div className='mt-10'>
            <Breadcrumb variant={Breadcrumb.variants.PRIMARY} items={items} />
        </div>
    );
});
