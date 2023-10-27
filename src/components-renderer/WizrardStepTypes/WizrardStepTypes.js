import React from 'react';
import { WizardStep } from '../../modules';


export const WizrardStepTypes = React.memo(() => {

    const variant = WizardStep.variants.PRIMARY;

    return (
        <div className='mt-10 flex flex-col w-[700px] p-5'>
            <WizardStep variant={variant} order='1' title='ЛИЧНИ ДАННИ' completed={true} />
            <div className='h-[1px]'></div>
            <WizardStep variant={variant} order='2' title='АДРЕС ЗА ДОСТАВКА' />
        </div>
    );
});
