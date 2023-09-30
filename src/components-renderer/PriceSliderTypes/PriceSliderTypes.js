import React from "react";
import { PriceSlider } from "../../modules";

export const PriceSliderTypes = () => {

    const handlePriceSet = (min, max) => {
        console.log({ min, max })
    };

    return (
        <div className="w-[300px] m-auto p-5 bg-gray-200 flex justify-center">
            <PriceSlider
                minPrice={0}
                maxPrice={1000}
                handlePriceSet={handlePriceSet}
            />
        </div>
    );
};