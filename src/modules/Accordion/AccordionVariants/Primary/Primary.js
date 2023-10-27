import React from 'react';
import { Body } from './Boddy/Body';
import { Header } from './Header/Header';

import './Primary.styles.css';

export const Primary = React.memo(({ categorie, subCategories }) => {

    const [expand, setExpand] = React.useState(false);

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
            <Header 
                onClick={hadleExpand}
                categorie={categorie}
                expand={expand}
            />
            <div ref={listWapperRef} className={'accordion-list-primary-container'}>
                <div ref={listContainerRef}>
                    <Body
                        subCategories={subCategories}
                    />
                </div>
            </div>
        </>
    );
});