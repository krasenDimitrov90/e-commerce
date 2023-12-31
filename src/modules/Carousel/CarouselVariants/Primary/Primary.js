import React from 'react';
import { Bullet } from './Bullet';
import './Primary.styles.css';

export const Primary = React.memo(({ images }) => {

    const current = React.useRef(0);
    const galeryRef = React.useRef(null);
    let imageSlides = null;
    let bullets = null;

    React.useEffect(() => {
        if (!galeryRef.current) return;
        imageSlides = galeryRef.current.querySelectorAll('.carousel-primary-image');
        bullets = galeryRef.current.querySelectorAll('.carousel-primary-bullet');
    }, [galeryRef.current]);

    React.useEffect(() => {
        if (!galeryRef.current) return;

        const timer = setInterval(() => {
            let newIndex = current.current === images.length - 1
                ? 0
                : Math.min(current.current + 1, images.length - 1);
            handleSlide(newIndex);
        }, 5000);

        return () => clearInterval(timer);
    }, []);


    const handleSlide = React.useCallback((idx) => {

        if (idx === current.current) return;
        if (idx - current.current >= 0) {
            imageSlides[current.current].className = "carousel-primary-image leftOut";
            imageSlides[idx].className = "carousel-primary-image leftIn";
        } else {
            imageSlides[current.current].className = "carousel-primary-image rightOut";
            imageSlides[idx].className = "carousel-primary-image rightIn";
        }
        updateBullet(current.current, idx);
        current.current = idx;

    }, [current, imageSlides])

    const updateBullet = React.useCallback((current, newIndex) => {
        bullets[current].className = 'carousel-primary-bullet';
        bullets[newIndex].className = 'carousel-primary-bullet selected';
    }, [bullets]);


    return (
        <div className='gallery-container'>
            <div ref={galeryRef} className='carousel-primary-galery'>
                {images.map((img, idx) => {
                    return (
                        <img className="carousel-primary-image"
                            key={`carousel-primary-image-${img}-${idx}`}
                            src={images[idx]}
                            style={(idx === 0)
                                ? { transform: "translateX(0%)" }
                                : { transform: "translateX(100%)" }}
                        />
                    );
                })}
                <div className='absolute bottom-[10px] w-full flex justify-center gap-2'>
                    {images.map((img, i) => {
                        return (
                            <Bullet
                                key={`carousel-primary-bullet-${img}-${i}`}
                                selected={i === current.current}
                                onClick={handleSlide.bind(null, i)}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
});