import React from "react";
import { TouchSpin } from "../../modules";

export const TouchSpinTypes = () => {

    const onQuantityChange = (value) => console.log(value);

    return (
        <div className="mt-10 flex justify-center items-center">
            <TouchSpin
                variant={TouchSpin.variants.PRIMARY}
                onQuantityChange={onQuantityChange}
                quantity={1}
            />
        </div>
    );
};