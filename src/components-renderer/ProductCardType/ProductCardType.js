import React from "react";
import { Outlet } from "react-router-dom";
import { Product } from "../../modules";
import { Link } from "react-router-dom";


export const ProductCardType = () => {

    const initialState = React.useMemo(() => {
        return localStorage.getItem('product-variant') || Product.variants.CARD;
    }, [])

    const [variant, setVariant] = React.useState(initialState);
    const [products, setProducts] = React.useState([]);

    const handleHorizontal = React.useCallback((variant) => {
        // const newState = variant === ProductCard.variants.CARD ? ProductCard.variants.ROW : ProductCard.variants.CARD;
        const newState = Product.variants[variant];

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
            <div className="mt-10 flex max-[640px]:flex-col">

                <div className="flex flex-col items-start basis-1/4 bg-[#F1F1F1]">
                    <div className="m-4">
                        <span>Orientation: {variant}</span>
                    </div>
                    <button onClick={() => handleHorizontal('CARD')} className="bg-gray-500 m-4 text-white p-2 rounded hover:bg-green-500">CARD</button>
                    <Link to={'/product/modal/id1'} className="bg-gray-500 m-4 text-white p-2 rounded hover:bg-green-500">MODAL</Link>
                    <button onClick={() => handleHorizontal('ROW')} className="bg-gray-500 m-4 text-white p-2 rounded hover:bg-green-500">ROW</button>
                </div>
                <div className={variant !== Product.variants.CARD ? 'flex flex-1 flex-col' : 'flex basis-3/4 flex-wrap justify-between pr-4'}>

                    {products.map(p => {
                        return (
                            <Product
                                key={p.id}
                                variant={variant}
                                image={p.image}
                                price={p.price}
                                oldPrice={p.oldPrice}
                                isNew={p.isNew}
                                productPath='/images'
                                modalPath={`/product/modal/${p.id}`}
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