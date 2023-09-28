import React from "react";
import { Slider } from "../../modules/Slider/Slider";

export const SliderType = () => {

    const [min, setMin] = React.useState(1);
    const [max, setMax] = React.useState(1000);
    const maxPrice = 1000;

    const getPercent = React.useCallback((val, maxVal) => {
        return (val / maxVal) * 100;
    }, []);

    const handleMinChange = React.useCallback((newValue) => {
        setMin(newValue);
    }, []);

    const handleMaxChange = React.useCallback((newValue) => {
        setMax(newValue);
    }, []);

    return (
        <div className="w-[300px] m-auto p-5 bg-gray-200 flex justify-center">
            <Slider
                min={min}
                max={max}
                maxPrice={maxPrice}
                onMinChange={handleMinChange}
                onMaxChange={handleMaxChange}
            />
        </div>
    );
};