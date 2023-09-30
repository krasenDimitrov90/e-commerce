import React from 'react';
// import './PriceSlider.styles.css';

export const PriceSlider = ({ handleMin, handleMax, min, max, maxPrice, minDiffPercent, maxDiffPercent, onMinChange, onMaxChange }) => {

    const [mouseIsDown, setMouseIsDown] = React.useState(false);
    const [sliderBar, setSliderBar] = React.useState(null);
    const containerRef = React.useRef(null);
    const sliderRef = React.useRef(null);
    const leftBarRef = React.useRef(null);
    const rightBarRef = React.useRef(null);
    const barsRadius = 10;

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
        setNewStyle(leftBarRef, minDiffPercent, 'left');
        handleSliderPosition();
    }, [minDiffPercent]);

    React.useEffect(() => {
        setNewStyle(rightBarRef, maxDiffPercent, 'left');
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
        const rightBarLeftPercent = getLeftPercentage(rightBarRef, 100);
        const leftBarLeftPercent = getLeftPercentage(leftBarRef, 0);

        if (sliderBar === 'left') {
            setNewStyle(leftBarRef, Math.min(offsetPercentage, rightBarLeftPercent), 'left');
            // minInputRef.current.value = Math.floor(maxPrice * (Math.min(offsetPercentage, rightBarLeftPercent) / 100))
            handleMin(Math.floor(maxPrice * (Math.min(offsetPercentage, rightBarLeftPercent) / 100)))
        } else if (sliderBar === 'right') {
            setNewStyle(rightBarRef, Math.max(offsetPercentage, leftBarLeftPercent), 'left');
            // maxInputRef.current.value = Math.floor(maxPrice * (Math.max(offsetPercentage, leftBarLeftPercent) / 100))
            handleMax(Math.floor(maxPrice * (Math.max(offsetPercentage, leftBarLeftPercent) / 100)))
        }
    }, [leftBarRef, rightBarRef, sliderBar]);

    const handleSliderPosition = React.useCallback(() => {
        let difference = getLeftPercentage(rightBarRef, 100) - getLeftPercentage(leftBarRef, 0);
        if (difference < 0) difference = 0;
        setNewStyle(sliderRef, difference, 'width');
        setNewStyle(sliderRef, getLeftPercentage(leftBarRef, 0), 'left');

    }, [leftBarRef, rightBarRef, sliderBar]);

    const getOffsetPercentage = React.useCallback((mousePosX, sliderBar) => {

        const containerWidth = containerRef.current.offsetWidth;
        const containerX = containerRef.current.getBoundingClientRect().x;
        const mouseX = Math.max(mousePosX, containerX - barsRadius);

        let newSliderWidth = Math.max(((containerX + containerWidth) - (mouseX)) - barsRadius, 0);

        if (sliderBar === 'right') newSliderWidth = Math.max(((containerX + containerWidth) - (mouseX)) + 10, 0);

        // console.log({ containerWidth, containerX, mouseX, })
        // console.log({ newSliderWidth, sliderBar })

        return Math.max(100 - (((newSliderWidth) / containerWidth) * 100), 0);
        // const newSliderWidth = Math.max(((containerX + containerWidth) - mouseX), 0);

        // return Math.max(100 - (((newSliderWidth + barsRadius) / containerWidth) * 100), 0);
    }, [containerRef]);

    const mouseMoveHandler = (e) => {
        if (!mouseIsDown || !sliderBar) return;

        handleKnobsMovement(getOffsetPercentage(e.clientX, sliderBar));
        handleSliderPosition();
    }

    const mouseUpHandler = () => {
        setMouseIsDown(false);
        setSliderBar(null);
    }


    return (
        <div className="custom-price-filter">
            <div className="custom-price-slider">
                <div className="price-slider" ref={containerRef}>
                    <a className="knob left-knob"
                        ref={leftBarRef}
                        onMouseDown={() => {
                            setMouseIsDown(true)
                            setSliderBar('left');
                        }}
                    ></a>
                    <div ref={sliderRef} className="range-bar"></div>
                    <a className="knob right-knob"
                        ref={rightBarRef}
                        onMouseDown={() => {
                            setMouseIsDown(true)
                            setSliderBar('right');
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
                    <div ref={sliderRef} className='slider'></div>

                    <span className='left-knob'
                        ref={leftBarRef}

                        onMouseDown={() => {
                            setMouseIsDown(true);
                            setSliderBar('left');
                        }}
                    >
                    </span>
                    <span className='right-knob'
                        ref={rightBarRef}
                        onMouseDown={() => {
                            setMouseIsDown(true);
                            setSliderBar('right');
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