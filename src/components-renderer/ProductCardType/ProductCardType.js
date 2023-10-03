import { ProductCard } from "../../modules";

import productImage from '../../images/product.png';

export const ProductCardType = () => {
    return (
        <div className="flex">
            <div className="flex basis-1/4">

            </div>
            <div className="flex basis-3/4 flex-wrap justify-between pr-4">
                <ProductCard
                    productPath='/images' modalPath='/price-slider'
                    title={'Дълбоко подхранваща маска за коса на LINEA BIO с натурално масло от Макадамия.'}
                    image={productImage}

                />
                <ProductCard
                    productPath='/images' modalPath='/price-slider'
                    title={'Дълбоко подхранваща маска за коса на LINEA BIO с натурално масло от Макадамия.'}
                    image={productImage}

                />
                <ProductCard
                    productPath='/images' modalPath='/price-slider'
                    title={'Дълбоко подхранваща маска за коса на LINEA BIO с натурално масло от Макадамия.'}
                    image={productImage}

                />
                <ProductCard
                    productPath='/images' modalPath='/price-slider'
                    title={'Дълбоко подхранваща маска за коса на LINEA BIO с натурално масло от Макадамия.'}
                    image={productImage}

                />
                <ProductCard
                    productPath='/images' modalPath='/price-slider'
                    title={'Дълбоко подхранваща маска за коса на LINEA BIO с натурално масло от Макадамия.'}
                    image={productImage}

                />
                <ProductCard productPath='/images' modalPath='/price-slider' image='boiler' title=' Електрически водонагревател за мигновено затопляне на вода в кухнята 30-60°C с м' />
                <ProductCard productPath='/images' modalPath='/price-slider' image='dispenser' title=' Диспенсър за вода с електронно охлаждане и автоматичен термостат Elekom EK-1169 ' />
                <ProductCard productPath='/images' modalPath='/price-slider' image='frape' title=' Миксер за фрапе,шейк, фитнес напитки, коктейли с метална купа ЕЛЕКОМ ЕК-706S' />
                <ProductCard productPath='/images' modalPath='/price-slider' image='iutiq2' title='  Уред за Вертикално гладене с Пара ЕК-801GS ' />

                <ProductCard productPath='/images' modalPath='/price-slider' image='utiq' title=' Самопочистваща се парна  ютия с мека ръкохватка и температурен контрол Елеком ЕК' />
                <ProductCard productPath='/images' modalPath='/price-slider' image='kolona' title=' Преносима блутут тонколона с микрофон, караоке функция и LED осветление Elekom Е...' />
                <ProductCard productPath='/images' modalPath='/price-slider' image='kolona2' title=' Преносима блутут тонколона с микрофон, караоке функция и LED осветление Elekom Е' />
                <ProductCard productPath='/images' modalPath='/price-slider' image='phone2' title='  Уред за Вертикално гладене с Пара ЕК-801GS ' />

                <ProductCard productPath='/images' modalPath='/price-slider' image='melachka' title=' Мощна Eлектрическа Месомелачка ЕЛЕКОМ ЕК-312 ' />
                <ProductCard productPath='/images' modalPath='/price-slider' image='krem' title=' Масло стимулант за ускоряване растежа на косата Икаров' />
                <ProductCard productPath='/images' modalPath='/price-slider' image='krem2' title=' Възстановяващ,хидратиращ шампоан за Бляскава и жизнена коса с масло от арган и х' />
                <ProductCard productPath='/images' modalPath='/price-slider' image='kartofki' title=' Еър Фритюрник мултифункционален уред за готвене и пържене без мазнина,полезно и ' />
            </div>
        </div>
    );
}; 