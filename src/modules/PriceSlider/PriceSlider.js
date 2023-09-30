import React from 'react';
// import './PriceSlider.styles.css';

export const PriceSlider = ({ handleMin, handleMax, min, max, maxPrice, minDiffPercent, maxDiffPercent, onMinChange, onMaxChange }) => {

    const [mouseIsDown, setMouseIsDown] = React.useState(false);
    const [sliderKnob, setSliderKnob] = React.useState(null);
    const containerRef = React.useRef(null);
    const rangeRef = React.useRef(null);
    const leftKnobRef = React.useRef(null);
    const rightKnobRef = React.useRef(null);
    const knobsRadius = 10;

    const minInputRef = React.useRef(null);
    const maxInputRef = React.useRef(null);

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
        handleSliderPosition();
    }, [minDiffPercent]);

    React.useEffect(() => {
        setNewStyle(rightKnobRef, maxDiffPercent, 'left');
        handleSliderPosition();
    }, [maxDiffPercent]);

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

    const handleKnobsMovement = React.useCallback((offsetPercentage) => {
        const rightBarLeftPercent = getLeftPercentage(rightKnobRef, 100);
        const leftBarLeftPercent = getLeftPercentage(leftKnobRef, 0);

        if (sliderKnob === 'left') {
            setNewStyle(leftKnobRef, Math.min(offsetPercentage, rightBarLeftPercent), 'left');
            handleMin(Math.floor(maxPrice * (Math.min(offsetPercentage, rightBarLeftPercent) / 100)))
        } else if (sliderKnob === 'right') {
            setNewStyle(rightKnobRef, Math.max(offsetPercentage, leftBarLeftPercent), 'left');
            handleMax(Math.floor(maxPrice * (Math.max(offsetPercentage, leftBarLeftPercent) / 100)))
        }
    }, [leftKnobRef, rightKnobRef, sliderKnob]);

    const handleSliderPosition = React.useCallback(() => {
        let difference = getLeftPercentage(rightKnobRef, 100) - getLeftPercentage(leftKnobRef, 0);
        if (difference < 0) difference = 0;
        setNewStyle(rangeRef, difference, 'width');
        setNewStyle(rangeRef, getLeftPercentage(leftKnobRef, 0), 'left');

    }, [leftKnobRef, rightKnobRef, sliderKnob]);

    const getOffsetPercentage = React.useCallback((mousePosX, sliderBar) => {

        const containerWidth = containerRef.current.offsetWidth;
        const containerX = containerRef.current.getBoundingClientRect().x;
        const mouseX = Math.max(mousePosX, containerX - knobsRadius);

        let newSliderWidth = Math.max(((containerX + containerWidth) - (mouseX)) - knobsRadius, 0);

        if (sliderBar === 'right') newSliderWidth = Math.max(((containerX + containerWidth) - (mouseX)) + 10, 0);

        return Math.max(100 - (((newSliderWidth) / containerWidth) * 100), 0);
    }, [containerRef]);

    const mouseMoveHandler = (e) => {
        if (!mouseIsDown || !sliderKnob) return;

        handleKnobsMovement(getOffsetPercentage(e.clientX, sliderKnob));
        handleSliderPosition();
    }

    const mouseUpHandler = () => {
        setMouseIsDown(false);
        setSliderKnob(null);
    }


    return (
        <div className="custom-price-filter">
            <div className="custom-price-slider">
                <div className="price-slider" ref={containerRef}>
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

    return (
        <>
            <div className="range-slider-container-outer">
                <div ref={containerRef} className='range-slider-container-inner'>
                    <div ref={rangeRef} className='slider'></div>

                    <span className='left-knob'
                        ref={leftKnobRef}

                        onMouseDown={() => {
                            setMouseIsDown(true);
                            setSliderKnob('left');
                        }}
                    >
                    </span>
                    <span className='right-knob'
                        ref={rightKnobRef}
                        onMouseDown={() => {
                            setMouseIsDown(true);
                            setSliderKnob('right');
                        }}
                    >
                    </span>
                </div>
            </div >
            <div className="price-input-container">
                <input className='price-input' type="text"
                    ref={minInputRef}
                    value={min}
                    onChange={(e) => {
                        let value = e.target.value || '0';
                        if (!validateNumberInput(value)) return;
                        onMinChange(Number(value));
                    }}
                />
                <input className='price-input' type="text"
                    ref={maxInputRef}
                    value={max}
                    onChange={(e) => {
                        let value = e.target.value || '0';
                        if (!validateNumberInput(value)) return;
                        onMaxChange(Number(e.target.value));
                    }}
                />
            </div>
        </>
    );
};