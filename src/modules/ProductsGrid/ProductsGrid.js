import { ProductItem } from '../ProductItem/ProductItem';

import './ProductsGrid.css';

export const ProductsGrid = () => {

    return (
        <div className='products-grid'>
            <ProductItem image='boiler' title=' Електрически водонагревател за мигновено затопляне на вода в кухнята 30-60°C с м'/>
            <ProductItem image='dispenser' title=' Диспенсър за вода с електронно охлаждане и автоматичен термостат Elekom EK-1169 '/>
            <ProductItem image='frape' title=' Миксер за фрапе,шейк, фитнес напитки, коктейли с метална купа ЕЛЕКОМ ЕК-706S' />
            <ProductItem image='iutiq2' title='  Уред за Вертикално гладене с Пара ЕК-801GS ' />

            <ProductItem image='utiq' title=' Самопочистваща се парна  ютия с мека ръкохватка и температурен контрол Елеком ЕК'/>
            <ProductItem image='kolona' title=' Преносима блутут тонколона с микрофон, караоке функция и LED осветление Elekom Е...'/>
            <ProductItem image='kolona2' title=' Преносима блутут тонколона с микрофон, караоке функция и LED осветление Elekom Е' />
            <ProductItem image='phone2' title='Телефон' />

            <ProductItem image='melachka' title=' Мощна Eлектрическа Месомелачка ЕЛЕКОМ ЕК-312 '/>
            <ProductItem image='krem' title=' Масло стимулант за ускоряване растежа на косата Икаров' />
            <ProductItem image='krem2' title=' Възстановяващ,хидратиращ шампоан за Бляскава и жизнена коса с масло от арган и х' />
            <ProductItem image='kartofki' title=' Еър Фритюрник мултифункционален уред за готвене и пържене без мазнина,полезно и ' />
        </div>
    );
};