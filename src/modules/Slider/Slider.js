import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import './Slider.styles.css';

export const Slider = React.memo(({
    min,
    max,
    maxPrice,
    onMinChange,
    onMaxChange,}) => {

    const [mouseIsDown, setMouseIsDown] = React.useState(false);
    const [minPercent, setMinPercent] = React.useState(0);
    const [maxPercent, setMaxPercent] = React.useState(100);

    const rangeRef = React.useRef(null);
    const leftKnobRef = React.useRef(null);
    const rightKnobRef = React.useRef(null);


    const getPercent = React.useCallback((val, maxVal) => {
        return (val / maxVal) * 100;
    }, []);

    const validateNumberInput = React.useCallback((input) => {
        if (!/^\d+$/.test(input)) return;
        return Number(input) <= maxPrice;
    }, []);

    const getLeftPercentage = React.useCallback((refElement, defaultVal) => {
        return parseFloat(refElement.current.style.left || defaultVal);
    }, []);

    const setNewStyle = React.useCallback((refElement, value, style) => {
        refElement.current.style[style] = value + '%';
    }, []);

    const handleSliderPosition = React.useCallback(() => {
        const difference = getLeftPercentage(rightKnobRef, 100) - getLeftPercentage(leftKnobRef, 0);
        setNewStyle(rangeRef, difference, 'width');
        setNewStyle(rangeRef, getLeftPercentage(leftKnobRef, 0), 'left');

    }, [leftKnobRef, rightKnobRef, rangeRef]);


    const mouseMoveHandler = (e) => {

        if ( !leftKnobRef || !rightKnobRef || !rangeRef) return;
        const mouseXPos = e.clientX;
        const rangeXPos = rangeRef.current.getBoundingClientRect().x;
        const rangeWidth = rangeRef.current.offsetWidth;

        // The position of the cursor relative to the range container in percent
        let mousePosPercent = (((mouseXPos + 10) - rangeXPos) / rangeWidth) * 100;

        const leftKnobLeftPercent = parseFloat(leftKnobRef.current.style.left);
        let newPercent = Math.max(0, mousePosPercent);
        newPercent = Math.min(newPercent, maxPercent);
        let newMin = (parseInt((maxPrice * (newPercent / 100))));

        
        // setNewStyle(leftKnobRef, Math.floor(newPercent), 'left');
        // setNewStyle(rangeRef,maxPercent - Math.floor(newPercent), 'width');
        // setNewStyle(rangeRef, Math.floor(newPercent), 'left');
        // onMinChange(newMin);

    };


    const mouseUpHandler = () => {
        setMouseIsDown(false);
    };

    // React.useEffect(() => {
    //     const diff = maxPercent - minPercent;
    //     const rangePercent = diff < 0 ? 0 : diff;
    //     setNewStyle(leftKnobRef, minPercent, 'left');
    //     setNewStyle(rightKnobRef, maxPercent, 'left');
    //     setNewStyle(rangeRef, minPercent, 'left');
    //     setNewStyle(rangeRef, rangePercent, 'width');
    // }, [minPercent, maxPercent]);

    React.useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('mouseup', mouseUpHandler);
        return (() => {
            window.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('mouseup', mouseUpHandler);
        })
    })


    return (
        <div className="custom-price-filter">
            <div className="custom-price-slider">
                <div className="price-slider">
                    <a className="knob left-knob"
                        ref={leftKnobRef}
                        onMouseDown={() => setMouseIsDown(true)}
                    ></a>
                    <div ref={rangeRef} className="range-bar"></div>
                    <a className="knob right-knob"
                        ref={rightKnobRef}
                        onMouseDown={() => setMouseIsDown(true)}
                    ></a>
                </div>

            </div>
            <div className="price-inputs-container">
                <input type="text" className="price-input" value={min}
                    onChange={(e) => {
                        let value = e.target.value || '0';
                        if (!validateNumberInput(value)) return;
                        onMinChange(Number(value));
                        setMinPercent(getPercent(value, maxPrice));
                    }}
                />
                <span className="text-gray-600">-</span>
                <input type="text" className="price-input" value={max}
                    onChange={(e) => {
                        let value = e.target.value || '0';
                        if (!validateNumberInput(value)) return;
                        onMaxChange(Number(e.target.value));
                        setMaxPercent(getPercent(value, maxPrice));
                    }}
                />
            </div>
        </div>
    );
});

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
