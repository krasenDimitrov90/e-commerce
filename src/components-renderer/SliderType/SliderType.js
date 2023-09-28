import React from "react";
import { Slider } from "../../modules/Slider/Slider";

export const SliderType = () => {

    const [min, setMin] = React.useState(0);
    const [max, setMax] = React.useState(1000);
    const [minPercent, setMinPercent] = React.useState(0);
    const [maxPercent, setMaxPercent] = React.useState(100);
    const maxPrice = 1000;

    const getPercent = React.useCallback((val, maxVal) => {
        return (val / maxVal) * 100;
    }, []);

    const handleMinChange = React.useCallback((newValue) => {
        setMin(newValue);
        setMinPercent(getPercent(newValue, maxPrice));
    }, []);

    const handleMaxChange = React.useCallback((newValue) => {
        setMax(newValue);
        setMaxPercent(getPercent(newValue, maxPrice));
    }, []);

    React.useEffect(() => {
        setMinPercent(getPercent(min, maxPrice));
    }, [min, max]);

    React.useEffect(() => {
        setMaxPercent(getPercent(max, maxPrice));
    }, [max]);

    return (
        <div className="w-[300px] m-auto p-5 bg-gray-200 flex justify-center">
            <Slider
                min={min}
                max={max}
                maxPrice={maxPrice}
                minPercent={minPercent}
                maxPercent={maxPercent}
                onMinChange={handleMinChange}
                onMaxChange={handleMaxChange}
            />
        </div>
    );
};