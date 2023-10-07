import { Outlet } from "react-router-dom";
import { ProductCard } from "../../modules";

import productImage from '../../images/product.png';
import coffie from '../../images/Coffie1.png';
import cotlon from '../../images/cotlon.png';
import dispenser from '../../images/dispenser.png';
import frape from '../../images/frape.png';
import iutiq2 from '../../images/iutiq2.png';
import kafevarka from '../../images/kafevarka.png';
import kartofki from '../../images/kartofki.png';
import kolona from '../../images/kolona.png';
import kolona2 from '../../images/kolona2.png';
import krem from '../../images/krem.png';
import krem2 from '../../images/krem2.png';
import melachka from '../../images/melachka.png';
import tenjera from '../../images/tenjera.png';
import utiq from '../../images/utiq.png';
import React from "react";

export const ProductCardType = () => {

    const initialState = React.useMemo(() => {
        return localStorage.getItem('product-variant') || ProductCard.variants.HORIZONTAL;
    }, [])

    const [variant, setVariant] = React.useState(initialState);

    const handleHorizontal = React.useCallback(() => {
        const newState = variant === ProductCard.variants.HORIZONTAL ? ProductCard.variants.VERTICAL : ProductCard.variants.HORIZONTAL;
        localStorage.setItem('product-variant', newState);
        setVariant(newState);
    }, [variant]);


    return (
        <>
            <div className="flex max-[640px]:flex-col">
                <div className="flex items-start basis-1/4 bg-[#F1F1F1]">
                    <button onClick={handleHorizontal} className="bg-gray-500 m-4 text-white p-2 rounded hover:bg-green-500">Orientation: {variant}</button>
                </div>
                <div className={variant !== ProductCard.variants.HORIZONTAL ? 'flex flex-col' : 'flex basis-3/4 flex-wrap justify-between pr-4'}>
                    <ProductCard variant={variant} image={productImage} price={15.5} oldPrice={15.99} isNew={true} productPath='/images' modalPath='/price-slider' title={'Дълбоко подхранваща маска за коса на LINEA BIO с натурално масло от Макадамия.'} />
                    <ProductCard variant={variant} image={coffie} price={33.99} oldPrice={45.99} productPath='/images' modalPath='/price-slider' title={'Дълбоко подхранваща маска за коса на LINEA BIO с натурално масло от Макадамия.'} />
                    <ProductCard variant={variant} image={tenjera} price={45.98} oldPrice={55.99} isNew={true} productPath='/images' modalPath='/price-slider' title={'Дълбоко подхранваща маска за коса на LINEA BIO с натурално масло от Макадамия.'} />
                    <ProductCard variant={variant} image={kafevarka} price={33.50} oldPrice={45.99} productPath='/images' modalPath='/price-slider' title={'Дълбоко подхранваща маска за коса на LINEA BIO с натурално масло от Макадамия.'} />
                    <ProductCard variant={variant} image={cotlon} price={42.2} oldPrice={70.99} productPath='/images' modalPath='/price-slider' title={'Дълбоко подхранваща маска за коса на LINEA BIO с натурално масло от Макадамия.'} />
                    <ProductCard variant={variant} image={productImage} price={12.4} oldPrice={15.99} isNew={true} productPath='/images' modalPath='/price-slider' title=' Електрически водонагревател за мигновено затопляне на вода в кухнята 30-60°C с м' />
                    <ProductCard variant={variant} image={dispenser} price={109.43} oldPrice={115.99} productPath='/images' modalPath='/price-slider' title=' Диспенсър за вода с електронно охлаждане и автоматичен термостат Elekom EK-1169 ' />
                    <ProductCard variant={variant} image={frape} price={33.21} oldPrice={110.99} isNew={true} productPath='/images' modalPath='/price-slider' title=' Миксер за фрапе,шейк, фитнес напитки, коктейли с метална купа ЕЛЕКОМ ЕК-706S' />
                    <ProductCard variant={variant} image={iutiq2} price={98.5} oldPrice={115.99} isNew={true} productPath='/images' modalPath='/price-slider' title='  Уред за Вертикално гладене с Пара ЕК-801GS ' />
                    <ProductCard variant={variant} image={kartofki} price={77.43} oldPrice={85.99} productPath='/images' modalPath='/price-slider' title=' Самопочистваща се парна  ютия с мека ръкохватка и температурен контрол Елеком ЕК' />
                    <ProductCard variant={variant} image={kolona} price={40} oldPrice={55.99} isNew={true} productPath='/images' modalPath='/price-slider' title=' Преносима блутут тонколона с микрофон, караоке функция и LED осветление Elekom Е...' />
                    <ProductCard variant={variant} image={kolona2} price={33.2} oldPrice={38.99} productPath='/images' modalPath='/price-slider' title=' Преносима блутут тонколона с микрофон, караоке функция и LED осветление Elekom Е' />
                    <ProductCard variant={variant} image={krem} price={98.99} oldPrice={110.99} isNew={true} productPath='/images' modalPath='/price-slider' title='  Уред за Вертикално гладене с Пара ЕК-801GS ' />
                    <ProductCard variant={variant} image={krem2} price={12.2} oldPrice={15.99} productPath='/images' modalPath='/price-slider' title=' Мощна Eлектрическа Месомелачка ЕЛЕКОМ ЕК-312 ' />
                    <ProductCard variant={variant} image={melachka} price={44} oldPrice={55.99} isNew={true} productPath='/images' modalPath='/price-slider' title=' Масло стимулант за ускоряване растежа на косата Икаров' />
                    <ProductCard variant={variant} image={utiq} price={50} oldPrice={65.99} isNew={true} productPath='/images' modalPath='/price-slider' title=' Възстановяващ,хидратиращ шампоан за Бляскава и жизнена коса с масло от арган и х' />
                    <ProductCard variant={variant} image={dispenser} price={45.6} oldPrice={62.99} productPath='/images' modalPath='/price-slider' title=' Еър Фритюрник мултифункционален уред за готвене и пържене без мазнина,полезно и ' />
                </div>
            </div>
            <Outlet />
        </>
    );
}; 