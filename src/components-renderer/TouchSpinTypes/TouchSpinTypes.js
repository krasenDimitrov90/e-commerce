import React from "react";
import { TouchSpin } from "../../modules";

export const TouchSpinTypes = () => {

    const [quantity, setQuantity] = React.useState(1);

    const setQuantityHandler = (newValue) => setQuantity(newValue);

    return (
        <div className="mt-10 flex justify-center items-center">
            <TouchSpin variant={TouchSpin.variants.PRIMARY} quantity={quantity} setQuantity={setQuantityHandler} />
        </div>
    );
};