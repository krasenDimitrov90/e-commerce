import React from "react";
import { PriceSlider } from "../../modules";

export const PriceSliderTypes = () => {

    const [min, setMin] = React.useState(1);
    const [max, setMax] = React.useState(1000);
    const [minDiffPercent, setMinDiffPercent] = React.useState(0);
    const [maxDiffPercent, setMaxDiffPercent] = React.useState(100);
    const maxPrice = 1000;

    const getPercent = React.useCallback((val, maxVal) => {
        return (val / maxVal) * 100;
    }, []);

    const handleMinChange = React.useCallback((newValue) => {
        setMin(newValue);
        setMinDiffPercent(getPercent(newValue, maxPrice));
    }, []);

    const handleMaxChange = React.useCallback((newValue) => {
        setMax(newValue);
        setMaxDiffPercent(getPercent(newValue, maxPrice));
    }, []);

    // console.log({ minDiffPercent, maxDiffPercent, max, min });

    return (
        <div className="flex flex-col m-auto w-[360px] justify-center items-center">
            <PriceSlider
                min={min}
                max={max}
                maxPrice={maxPrice}
                onMinChange={handleMinChange}
                onMaxChange={handleMaxChange}
            />
        </div>
    );
};