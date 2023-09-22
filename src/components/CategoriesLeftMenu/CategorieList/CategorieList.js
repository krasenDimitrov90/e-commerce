import React from 'react';
import { AnchorButton } from '../../AnchorButton/AnchorButton';
import { ToggleButton } from '../../ToggleButton/ToggleButton';

import './CategorieList.css';

const SubCategorieList = ({ subcategories, isActive }) => {

    const classes = 'sub-categories-list ' + (isActive ? 'shown' : '');
    console.log(classes)

    return (
        <div className={'sub-categories'}>
            <ul className={classes}>
                {subcategories.map(subCat => <SubCategorie name={subCat} />)}
            </ul>
        </div>
    );
};

const SubCategorie = ({ name }) => {

    return (
        <li className='subcategorie-item'>
            <AnchorButton variant='gray-green' thin={true} >{name}</AnchorButton>
        </li>
    );
};

const Categorie = ({ categorie }) => {

    const [showList, setShowList] = React.useState(false);
    const showListHandler = () => setShowList(prev => !prev)

    return (
        <>
            <div className='categorie-btns-container'>
                <AnchorButton variant='gray-green' >{categorie.categorie}</AnchorButton>
                <ToggleButton onCLick={showListHandler} defaultIcon='plus' toggledIcon='minus' />
            </div>

            <SubCategorieList isActive={showList} subcategories={categorie.subcategories} />
        </>
    );
};

export const CategorieList = ({ categories }) => {
    return (
        <div className='categorie-list'>
            {categories.map(cat => {
                return <Categorie categorie={cat} />
            })}
        </div>
    );
};