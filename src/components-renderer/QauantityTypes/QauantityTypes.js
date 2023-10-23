import React from "react";
import { Qauantity } from "../../modules";

export const QauantityTypes = () => {

    const [quantity, setQuantity] = React.useState(1);

    const setQuantityHandler = (newValue) => setQuantity(newValue);

    return (
        <div className="mt-10 flex justify-center items-center">
            <Qauantity quantity={quantity} setQuantity={setQuantityHandler} />
        </div>
    );
};