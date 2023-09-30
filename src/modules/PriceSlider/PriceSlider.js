import React from 'react';
import { Button } from '../Button/Button';
import { Icon } from '../Icons/Icons';
import './PriceSlider.styles.css';

export const PriceSlider = ({ minPrice, maxPrice, handlePriceSet }) => {

    const [min, setMin] = React.useState(minPrice);
    const [max, setMax] = React.useState(maxPrice);
    const [minDiffPercent, setMinDiffPercent] = React.useState(0);
    const [maxDiffPercent, setMaxDiffPercent] = React.useState(100);

    const [init, setInit] = React.useState(true);
    const [mouseIsDown, setMouseIsDown] = React.useState(false);
    const [sliderKnob, setSliderKnob] = React.useState(null);
    const containerRef = React.useRef(null);
    const rangeRef = React.useRef(null);
    const leftKnobRef = React.useRef(null);
    const rightKnobRef = React.useRef(null);
    const knobsRadius = 10;

    React.useEffect(() => {
        if (init) setInit(false);
        else if (!mouseIsDown) handlePriceSet(min, max);
    }, [mouseIsDown]);

    React.useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('mouseup', mouseUpHandler);
        return (() => {
            window.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('mouseup', mouseUpHandler);
        })
    })

    React.useEffect(() => {
        setNewStyle(leftKnobRef, minDiffPercent, 'left');
        handleRangePosition();
    }, [minDiffPercent]);

    React.useEffect(() => {
        setNewStyle(rightKnobRef, maxDiffPercent, 'left');
        handleRangePosition();
    }, [maxDiffPercent]);


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

    const handleKnobsMovement = React.useCallback((rangeWidthPercentage) => {
        const rightKnobLeftPercent = getLeftPercentage(rightKnobRef, 100);
        const leftKnobLeftPercent = getLeftPercentage(leftKnobRef, 0);

        if (sliderKnob === 'left') {
            setNewStyle(leftKnobRef, Math.min(rangeWidthPercentage, rightKnobLeftPercent), 'left');
            setMin(Math.floor(maxPrice * (Math.min(rangeWidthPercentage, rightKnobLeftPercent) / 100)))
        } else if (sliderKnob === 'right') {
            setNewStyle(rightKnobRef, Math.max(rangeWidthPercentage, leftKnobLeftPercent), 'left');
            setMax(Math.floor(maxPrice * (Math.max(rangeWidthPercentage, leftKnobLeftPercent) / 100)))
        }
    }, [leftKnobRef, rightKnobRef, sliderKnob]);

    const handleRangePosition = React.useCallback(() => {
        let difference = getLeftPercentage(rightKnobRef, 100) - getLeftPercentage(leftKnobRef, 0);
        if (difference < 0) difference = 0;
        setNewStyle(rangeRef, difference, 'width');
        setNewStyle(rangeRef, getLeftPercentage(leftKnobRef, 0), 'left');

    }, [leftKnobRef, rightKnobRef, sliderKnob]);

    // Calculate the Range width in percentage based on the mouse position, without applying it.
    const calcRangeWithPercent = React.useCallback((mousePosX, sliderBar) => {

        const containerWidth = containerRef.current.offsetWidth;
        const containerX = containerRef.current.getBoundingClientRect().x;
        const mouseX = Math.max(mousePosX, containerX - knobsRadius);

        let newRangeWidth = Math.max(((containerX + containerWidth) - (mouseX)) - knobsRadius, 0);
        if (sliderBar === 'right') newRangeWidth = Math.max(((containerX + containerWidth) - (mouseX)) + knobsRadius, 0);

        return Math.max(100 - (((newRangeWidth) / containerWidth) * 100), 0);
    }, [containerRef]);

    const mouseMoveHandler = (e) => {
        if (!mouseIsDown || !sliderKnob) return;

        handleKnobsMovement(calcRangeWithPercent(e.clientX, sliderKnob));
        handleRangePosition();
    }

    const mouseUpHandler = () => {
        setMouseIsDown(false);
        setSliderKnob(null);
    }


    return (
        <div className="custom-price-filter">
            <div className="custom-price-slider">
                <div ref={containerRef} className="price-slider" >
                    <a className="knob left-knob"
                        ref={leftKnobRef}
                        onMouseDown={() => {
                            setMouseIsDown(true)
                            setSliderKnob('left');
                        }}
                    ></a>
                    <div ref={rangeRef} className="range-bar"></div>
                    <a className="knob right-knob"
                        ref={rightKnobRef}
                        onMouseDown={() => {
                            setMouseIsDown(true)
                            setSliderKnob('right');
                        }}
                    ></a>
                </div>

            </div>
            <div className="price-inputs-container">
                <input type="text" className="price-input"
                    value={min}
                    onChange={(e) => {
                        let value = e.target.value || '0';
                        if (!validateNumberInput(value)) return;
                        setMin(Number(value))
                        setMinDiffPercent(getPercent(Number(value), maxPrice));
                    }}
                />
                <span className="text-gray-600">-</span>
                <input type="text" className="price-input"
                    value={max}
                    onChange={(e) => {
                        let value = e.target.value || '0';
                        if (!validateNumberInput(value)) return;
                        setMax(Number(value))
                        setMaxDiffPercent(getPercent(Number(value), maxPrice));
                    }}
                />

                <Button onClick={handlePriceSet.bind(null, min, max)} size='square-sm' ><Icon variant='arrow-right' /></Button>
            </div>
        </div>
    );
};