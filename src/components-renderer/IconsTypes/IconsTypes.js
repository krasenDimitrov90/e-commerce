import React from 'react';
import { Icon } from '../../modules';
import { Button } from '../../modules';

let icons = Object.keys(Icon.variants);

export const IconsTypes = React.memo(() => {
    console.log(icons)
    return (
        <>
            <div className='mt-12 pl-3 flex flex-wrap gap-2'>
                {
                    icons.map((variant, i) => {
                        return (
                            <div className='flex flex-col'>
                                <div className='bg-blue-400 rounded flex justify-center items-center text-white w-[30px] h-[30px]'>
                                    <Icon variant={variant} />
                                </div>
                                <div className='flex justify-center items-center'>
                                    {i}
                                </div>
                            </div>
                        );
                    })
                }
            </div>

            <div className='pl-3 mt-5 flex flex-col h-[250px] flex-wrap'>
                {
                    icons.map((variant, i) => {
                        return (
                            <div>
                                {i} - {variant}
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
});
