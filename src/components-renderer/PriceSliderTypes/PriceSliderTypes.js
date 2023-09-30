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

    const onLeftKnobMove = React.useCallback((newValue) => {
        setMin(newValue);
    }, []);

    const onRightKnobMove = React.useCallback((newValue) => {
        setMax(newValue);
    }, []);

    return (
        <div className="w-[300px] m-auto p-5 bg-gray-200 flex justify-center">
            <PriceSlider
                onLeftKnobMove={onLeftKnobMove}
                onRightKnobMove={onRightKnobMove}
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