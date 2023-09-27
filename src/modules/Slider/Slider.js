import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import './Slider.styles.css';

export const Slider = ({ min, max, maxPrice, minDiffPercent, maxDiffPercent, onMinChange, onMaxChange }) => {

    const validateNumberInput = React.useCallback((input) => {
        if (!/^\d+$/.test(input)) return;
        return Number(input) <= maxPrice;
    }, []);

    return (
        <div className="custom-price-filter">
            <div className="custom-price-slider">
                <div className="price-slider">
                    <a className="knob left-knob"></a>
                    <div className="range-bar"></div>
                    <a className="knob right-knob"></a>
                </div>

            </div>
            <div className="price-inputs">
                <input type="text" value={min}
                    onChange={(e) => {
                        let value = e.target.value || '0';
                        if (!validateNumberInput(value)) return;
                        onMinChange(Number(value));
                    }}
                />
                <input type="text" value={max}
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
