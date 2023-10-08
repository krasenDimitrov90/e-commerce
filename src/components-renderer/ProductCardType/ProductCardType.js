import React from "react";
import { Outlet } from "react-router-dom";
import { ProductCard } from "../../modules";


export const ProductCardType = () => {

    const initialState = React.useMemo(() => {
        return localStorage.getItem('product-variant') || ProductCard.variants.HORIZONTAL;
    }, [])

    const [variant, setVariant] = React.useState(initialState);
    const [products, setProducts] = React.useState([]);

    const handleHorizontal = React.useCallback(() => {
        const newState = variant === ProductCard.variants.HORIZONTAL ? ProductCard.variants.VERTICAL : ProductCard.variants.HORIZONTAL;
        localStorage.setItem('product-variant', newState);
        setVariant(newState);
    }, [variant]);

    React.useEffect(() => {
        fetch('/products.json')
            .then(prods => prods.json())
            .then(prods => setProducts(prods))
            .catch((err) => setProducts([]));
    }, []);


    return (
        <>
            <div className="flex max-[640px]:flex-col">
                <div className="flex items-start basis-1/4 bg-[#F1F1F1]">
                    <button onClick={handleHorizontal} className="bg-gray-500 m-4 text-white p-2 rounded hover:bg-green-500">Orientation: {variant}</button>
                </div>
                <div className={variant !== ProductCard.variants.HORIZONTAL ? 'flex flex-1 flex-col' : 'flex basis-3/4 flex-wrap justify-between pr-4'}>

                    {products.map(p => {
                        return (
                            <ProductCard
                                key={p.id}
                                variant={variant}
                                image={p.image}
                                price={p.price}
                                oldPrice={p.oldPrice}
                                isNew={p.isNew}
                                productPath='/images'
                                modalPath='/price-slider'
                                title={p.title}
                            />
                        );
                    })}

                </div>
            </div>
            <Outlet />
        </>
    );
}; 