import React from 'react';
import { Accordion } from '../../modules';

const subCat1 = ['Тигани', 'Тигани', ' Тигани  Тигани Тигани Тигани Тигани Тигани Тигани Тигани Тигани']
const subCat2 = ['Тигани', 'Тигани', 'Тигани','Тигани','Тигани','Тигани','Тигани','Тигани','Тигани','Тигани','Тигани','Тигани']

export const AccordionTypes = React.memo(() => {
    return (
        <div className='mt-10 p-3 flex flex-col bg-gray-300 w-[300px]'>
            <Accordion variant={Accordion.variants.PRIMARY} categorie={'Бутик ШИК'} subCategories={subCat1} />
            <Accordion variant={Accordion.variants.PRIMARY} categorie={'Здраве и красота'} subCategories={subCat2}  />
        </div>
    );
});
