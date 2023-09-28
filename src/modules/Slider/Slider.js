import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import './Slider.styles.css';

export const Slider = ({ min, max, maxPrice, onMinChange, onMaxChange }) => {

    const rangeRef = React.useRef(null);
    const leftKnobRef = React.useRef(null);
    const rightKnobRef = React.useRef(null);

    const validateNumberInput = React.useCallback((input) => {
        if (!/^\d+$/.test(input)) return;
        return Number(input) <= maxPrice;
    }, []);

    const getPercent = React.useCallback((val, maxVal) => {
        return (val / maxVal) * 100;
    }, []);

    const setNewStyle = React.useCallback((refElement, value, style) => {
        refElement.current.style[style] = value + '%';
    }, []);

    React.useEffect(() => {
        const minPercentage = getPercent(min, maxPrice);
        const maxPercentage = getPercent(max, maxPrice);
        const diff = maxPercentage - minPercentage;
        const sliderPercentage = diff < 0 ? 0 : diff;
        setNewStyle(leftKnobRef, minPercentage, 'left');
        setNewStyle(rightKnobRef, maxPercentage, 'left');
        setNewStyle(rangeRef, minPercentage, 'left');
        setNewStyle(rangeRef, sliderPercentage, 'width');
    }, [min, max]);


    return (
        <div className="custom-price-filter">
            <div className="custom-price-slider">
                <div className="price-slider">
                    <a ref={leftKnobRef} className="knob left-knob"></a>
                    <div ref={rangeRef} className="range-bar"></div>
                    <a ref={rightKnobRef} className="knob right-knob"></a>
                </div>

            </div>
            <div className="price-inputs-container">
                <input type="text" className="price-input" value={min}
                    onChange={(e) => {
                        let value = e.target.value || '0';
                        if (!validateNumberInput(value)) return;
                        onMinChange(Number(value));
                    }}
                />
                <span className="text-gray-600">-</span>
                <input type="text" className="price-input" value={max}
                    onChange={(e) => {
                        let value = e.target.value || '0';
                        if (!validateNumberInput(value)) return;
                        onMaxChange(Number(e.target.value));
                    }}
                />
            </div>
        </div>
    );
};

// export const Slider = ({ min, max, onChange }) => {
//     const [minVal, setMinVal] = useState(min);
//     const [maxVal, setMaxVal] = useState(max);
//     const minValRef = useRef(min);
//     const maxValRef = useRef(max);
//     const range = useRef(null);

//     // Convert to percentage
//     const getPercent = useCallback(
//         (value) => Math.round(((value - min) / (max - min)) * 100),
//         [min, max]
//     );

//     // Set width of the range to decrease from the left side
//     useEffect(() => {
//         const minPercent = getPercent(minVal);
//         const maxPercent = getPercent(maxValRef.current);

//         if (range.current) {
//             range.current.style.left = `${minPercent}%`;
//             range.current.style.width = `${maxPercent - minPercent}%`;
//         }
//     }, [minVal, getPercent]);

//     // Set width of the range to decrease from the right side
//     useEffect(() => {
//         const minPercent = getPercent(minValRef.current);
//         const maxPercent = getPercent(maxVal);

//         if (range.current) {
//             range.current.style.width = `${maxPercent - minPercent}%`;
//         }
//     }, [maxVal, getPercent]);

//     // Get min and max values when their state changes
//     useEffect(() => {
//         onChange({ min: minVal, max: maxVal });
//     }, [minVal, maxVal, onChange]);

//     return (
//         <div className="container">
//             <input
//                 type="range"
//                 min={min}
//                 max={max}
//                 value={minVal}
//                 onChange={(event) => {
//                     const value = Math.min(Number(event.target.value), maxVal - 1);
//                     setMinVal(value);
//                     minValRef.current = value;
//                 }}
//                 className="thumb thumb--left"
//                 style={{ zIndex: minVal > max - 100 && "5" }}
//             />
//             <input
//                 type="range"
//                 min={min}
//                 max={max}
//                 value={maxVal}
//                 onChange={(event) => {
//                     const value = Math.max(Number(event.target.value), minVal + 1);
//                     setMaxVal(value);
//                     maxValRef.current = value;
//                 }}
//                 className="thumb thumb--right"
//             />

//             <div className="slider">
//                 <div className="slider__track" />
//                 <div ref={range} className="slider__range" />
//                 <div className="slider__left-value">{minVal}</div>
//                 <div className="slider__right-value">{maxVal}</div>
//             </div>
//         </div>
//     );
// };


// const MultiRangeSlider = ({ min, max, onChange }) => {

// };

// MultiRangeSlider.propTypes = {
//     min: PropTypes.number.isRequired,
//     max: PropTypes.number.isRequired,
//     onChange: PropTypes.func.isRequired
// };

// export default MultiRangeSlider;
