import React from 'react';
import './PriceSlider.styles.css';

export const PriceSlider = ({ min, max, onChange }) => {

    const [mouseIsDown, setMouseIsDown] = React.useState(false);
    const [sliderBar, setSliderBar] = React.useState(null);
    const containerRef = React.useRef(null);
    const sliderRef = React.useRef(null);
    const leftBarRef = React.useRef(null);
    const rightBarRef = React.useRef(null);
    const barsWidth = 19;

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
        } else if (sliderBar === 'right') {
            setNewStyle(rightBarRef, Math.max(offsetPercentage, leftBarLeftPercent), 'left');
        }
    }, [leftBarRef, rightBarRef, sliderBar]);

    const hadleSliderPosition = React.useCallback(() => {
        const difference = getLeftPercentage(rightBarRef, 100) - getLeftPercentage(leftBarRef, 0);
        setNewStyle(sliderRef, difference, 'width');
        setNewStyle(sliderRef, getLeftPercentage(leftBarRef, 0), 'left');

    },[leftBarRef, rightBarRef, sliderBar]);

    const getOffsetPercentage = React.useCallback((mousePosX) => {

        const containerWidth = containerRef.current.offsetWidth;
        const containerX = containerRef.current.getBoundingClientRect().x;
        const mouseX = Math.max(mousePosX, containerX);
        const newSliderWidth = Math.max(((containerX + containerWidth) - mouseX), 0);

        return Math.max(100 - (((newSliderWidth + barsWidth) / containerWidth) * 100), 0);
    },[containerRef]);

    const mouseMoveHandler = (e) => {
        if (!mouseIsDown || !sliderBar) return;

        handleKnobsMovement(getOffsetPercentage(e.clientX));
        hadleSliderPosition();
    }

    const mouseUpHandler = () => {
        setMouseIsDown(false);
        setSliderBar(null);
    }

    React.useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('mouseup', mouseUpHandler);
        return (() => {
            window.removeEventListener('mousemove', mouseMoveHandler);
            window.addEventListener('mouseup', mouseUpHandler);
        })
    })

    return (
        <div ref={containerRef} className='range-slider-container'>
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
    );
};