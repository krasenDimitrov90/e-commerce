import React from "react";
import { Slider } from "../../modules/Slider/Slider";

export const SliderType = ({ minPrice, maxPrice }) => {

    const [min, setMin] = React.useState(minPrice);
    const [max, setMax] = React.useState(maxPrice);
    // const [minPercent, setMinPercent] = React.useState(0);
    // const [maxPercent, setMaxPercent] = React.useState(100);
    // const maxPrice = (max);

    const getPercent = React.useCallback((val, maxVal) => {
        return (val / maxVal) * 100;
    }, []);

    const handleMinChange = React.useCallback((newValue) => {
        setMin(newValue);
        // setMinPercent(getPercent(newValue, maxPrice));
    }, [maxPrice]);

    const handleMaxChange = React.useCallback((newValue) => {
        setMax(newValue);
        // setMaxPercent(getPercent(newValue, maxPrice));
    }, [maxPrice]);


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