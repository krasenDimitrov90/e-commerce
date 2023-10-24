import React from "react";
import { Quantity } from "../../modules";

export const QuantityTypes = () => {

    const [quantity, setQuantity] = React.useState(1);

    const setQuantityHandler = (newValue) => setQuantity(newValue);

    return (
        <div className="mt-10 flex justify-center items-center">
            <Quantity variant={Quantity.variants.PRIMARY} quantity={quantity} setQuantity={setQuantityHandler} />
        </div>
    );
};