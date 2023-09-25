import React from 'react';
import './PriceSlider.styles.css';

export const PriceSlider = ({ min, max, onChange }) => {

    const [mouseIsDown, setMouseIsDown] = React.useState(false);
    const [sliderBar, setSliderBar] = React.useState(null);
    const containerRef = React.useRef(null);
    const barContainerRef = React.useRef(null);
    const barsWidth = 16;

    const mouseMoveHandler = (e) => {

        if (mouseIsDown && sliderBar) {
            if (sliderBar === 'left') {

                let containerWidth = containerRef.current.offsetWidth
                let containerX = containerRef.current.getBoundingClientRect().x
                let mouseX = Math.max(e.clientX, containerX);


                let width = Math.max(((containerX + containerWidth) - mouseX), 0);
                let left = Math.max(100 - ((width / containerWidth) * 100), 0);
                barContainerRef.current.style.width = (Math.max((width / containerWidth) * 100, barsWidth)) + '%';
                barContainerRef.current.style.left = Math.min(left, 100 - barsWidth) + '%';

            } else {

                let containerWidth = containerRef.current.offsetWidth
                let containerX = containerRef.current.getBoundingClientRect().x
                let mouseX = Math.max(e.clientX, containerX);


                let width = Math.max(((containerX + containerWidth) - mouseX), 0);
                width = Math.max(100 - ((width / containerWidth) * 100), barsWidth);
                barContainerRef.current.style.width = width + '%';
                barContainerRef.current.style.left = 0 + '%';
            }

        }
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
            <div
                ref={barContainerRef}
                className='bar-sliders-container'
            >
                <span
                    className={`left-bar`}
                    onMouseDown={() => {
                        setMouseIsDown(true);
                        setSliderBar('left');
                    }}
                >
                </span>
                <span
                    className="right-bar"
                    onMouseDown={() => {
                        setMouseIsDown(true);
                        setSliderBar('right');
                    }}
                >
                </span>
            </div>
        </div>
    );
};