import { Button } from '../Button/Button';
import { AnchorButton } from '../AnchorButton/AnchorButton';
import { Icon } from '../Icons/Icons';
import { ToggleButton } from '../ToggleButton/ToggleButton';

import { CategorieList } from './CategorieList/CategorieList';

import './CategoriesLeftMenu.css';

import { categories } from '../mock-data';

export const CategoriesLeftMenu = () => {

    return (
        <div className='categories-left-menu-container'>
            <div className='categories-left-menu-container-title-container'>
                <h1 className='uppercase font-extrabold'>Категории</h1>
            </div>
            <div className='categories-container-left-menu'>
                <div className='categorie-container'>
                    <CategorieList
                        categories={categories}
                    />
                </div>

            </div>
        </div>
    );
};