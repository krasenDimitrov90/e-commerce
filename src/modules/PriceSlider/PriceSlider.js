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

    const mouseMoveHandler = (e) => {

        // if (mouseIsDown && sliderBar) {
        //     if (sliderBar === 'left') {

        //         let containerWidth = containerRef.current.offsetWidth;
        //         let containerX = containerRef.current.getBoundingClientRect().x;
        //         let mouseX = Math.max(e.clientX, containerX);


        //         let width = Math.max(((containerX + containerWidth) - mouseX), 0);
        //         let left = Math.max(100 - ((width / containerWidth) * 100), 0);
        //         barContainerRef.current.style.width = (Math.max((width / containerWidth) * 100, barsWidth)) + '%';
        //         barContainerRef.current.style.left = Math.min(left, 100 - barsWidth) + '%';
        //         leftBarRef.current.style.left = Math.min(left, 100 - barsWidth) + '%';

        //     } else {

        //         let containerWidth = containerRef.current.offsetWidth;
        //         let containerX = containerRef.current.getBoundingClientRect().x;
        //         let mouseX = Math.max(e.clientX, containerX);


        //         let width = Math.max(((containerX + containerWidth) - mouseX), 0);
        //         width = Math.max(100 - ((width / containerWidth) * 100), barsWidth);
        //         barContainerRef.current.style.width = width + '%';
        //         barContainerRef.current.style.left = 0 + '%';
        //         rightBarRef.current.style.right = 100 - width + '%';
        //     }

        // }

        let leftBarX = leftBarRef.current.getBoundingClientRect().x
        let rightBarX = rightBarRef.current.getBoundingClientRect().x
        let containerWidth = containerRef.current.offsetWidth;
        let containerX = containerRef.current.getBoundingClientRect().x;
        let mouseX = Math.max(e.clientX, containerX);

        // console.log({leftBarX, rightBarX, containerX, containerWidth})

        if (!mouseIsDown || !sliderBar) return;


        if (sliderBar === 'left') {
            let rightBarLeftPercent = parseFloat(rightBarRef.current.style.left || 100);

            let width = Math.max(((containerX + containerWidth) - mouseX), 0);
            let left = Math.max(100 - (((width + barsWidth) / containerWidth) * 100), 0);
            leftBarRef.current.style.left = Math.min(left, rightBarLeftPercent) + '%';

        } else {
            let leftBarLeftPercent = parseFloat(leftBarRef.current.style.left || 0);

            let width = Math.max(((containerX + containerWidth) - mouseX), 0);
            let left = Math.max(100 - (((width + barsWidth) / containerWidth) * 100), 0);
            rightBarRef.current.style.left = Math.max(left, leftBarLeftPercent) + '%';

        }

        sliderRef.current.style.width = 
            parseFloat(rightBarRef.current.style.left || 100) - parseFloat(leftBarRef.current.style.left || 0) + '%';
        sliderRef.current.style.left = parseFloat(leftBarRef.current.style.left || 0) + '%';

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
                ref={sliderRef}
                className='slider'
            >
            </div>
            <span
                ref={leftBarRef}
                className={`left-bar`}
                onMouseDown={() => {
                    setMouseIsDown(true);
                    setSliderBar('left');
                }}
            >
            </span>
            <span
                ref={rightBarRef}
                className="right-bar"
                onMouseDown={() => {
                    setMouseIsDown(true);
                    setSliderBar('right');
                }}
            >
            </span>
        </div>
    );
};