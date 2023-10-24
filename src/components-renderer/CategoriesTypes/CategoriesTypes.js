import React from 'react';
import { Categorie } from '../../modules';

const subCat1 = ['Тигани', 'Тигани', 'Тигани']
const subCat2 = ['Тигани', 'Тигани', 'Тигани','Тигани','Тигани','Тигани','Тигани','Тигани','Тигани','Тигани','Тигани','Тигани']

export const CategoriesTypes = React.memo(() => {
    return (
        <div className='mt-10 p-3 flex flex-col bg-gray-300 w-[300px]'>
            <Categorie variant={Categorie.variants.PRIMARY} categorie={'Бутик ШИК'} subCategories={subCat1} />
            <Categorie variant={Categorie.variants.PRIMARY} categorie={'Здраве и красота'} subCategories={subCat2}  />
        </div>
    );
});
