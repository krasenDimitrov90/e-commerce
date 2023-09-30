import React from "react";
import { PriceSlider } from "../../modules";

export const PriceSliderTypes = () => {

    const [min, setMin] = React.useState(1);
    const [max, setMax] = React.useState(300);
    const [minDiffPercent, setMinDiffPercent] = React.useState(0);
    const [maxDiffPercent, setMaxDiffPercent] = React.useState(100);
    const maxPrice = 300;

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

    const handleMin = React.useCallback((newValue) => {
        setMin(newValue);
    }, []);

    const handleMax = React.useCallback((newValue) => {
        setMax(newValue);
    }, []);

    return (
        <div className="w-[300px] m-auto p-5 bg-gray-200 flex justify-center">
        {/* <div className="flex flex-col m-auto w-[360px] justify-center items-center"> */}
            <PriceSlider
                handleMin={handleMin}
                handleMax={handleMax}
                min={min}
                max={max}
                minDiffPercent={minDiffPercent}
                maxDiffPercent={maxDiffPercent}
                maxPrice={maxPrice}
                onMinChange={handleMinChange}
                onMaxChange={handleMaxChange}
            />
        </div>
    );
};