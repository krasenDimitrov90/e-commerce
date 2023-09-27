import React from "react";
import { Slider } from "../../modules/Slider/Slider";

export const SliderType = () => {

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

    return (
        <div className="w-[300px] m-auto flex justify-center">
            <Slider
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