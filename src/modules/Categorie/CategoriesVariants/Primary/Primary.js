import React from 'react';
import { Icon } from '../../../Icons/Icons';
import { CategorieList } from '../../../CategorieList/CategorieList';

import './Primary.styles.css';

export const Primary = React.memo(({ categorie, subCategories }) => {

    const [expand, setExpand] = React.useState(false);

    const iconClasses = `categorie-icon-primary-expand ${expand ? 'rotate' : ''}`;

    const listWapperRef = React.useRef(null);
    const listContainerRef = React.useRef(null);

    React.useEffect(() => {
        if (listContainerRef && listWapperRef) {
            if (expand) {
                listWapperRef.current.style.height = listContainerRef.current.clientHeight + 'px';
            } else {
                listWapperRef.current.style.height = 0;
            }
        }
    }, [listContainerRef, listWapperRef, expand]);


    const hadleExpand = React.useCallback(() => {
        setExpand(curr => !curr);
    }, []);

    return (
        <>
            <div className='flex flex-1 mt-[10px]'>
                <div className='flex flex-1 justify-between items-end'>
                    <button onClick={hadleExpand} className='flex-1 text-start text-lg text-[#444] font-[700] outline-none hover:text-green-400'>
                        {categorie}
                    </button>
                    <div className='flex'>
                        <div>
                            <button onClick={hadleExpand} className='flex justify-center items-center text-green-400 text-lg w-[16px] h-[16px] rounded-sm outline-none'>
                                <span className={iconClasses}>
                                    {<Icon variant='ARROW_DOWN' />}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={listWapperRef} className={'categorie-list-primary-container'}>
                <div ref={listContainerRef}>
                    <CategorieList
                        variant={CategorieList.variants.PRIMARY}
                        subCategories={subCategories}
                    />
                </div>
            </div>
        </>
    );
});
