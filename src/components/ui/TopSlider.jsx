import React, { useRef, useState, useEffect } from "react";
import "./TopSlider.scss";

const TopSlider = ({ defaultImages = [], altTexts = [] }) => {
  const sliderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleNext = () => {
    const slider = sliderRef.current;
    slider.scrollLeft += 240;
    setScrollPosition(slider.scrollLeft + 240);
  };

  const handlePrev = () => {
    const slider = sliderRef.current;
    slider.scrollLeft -= 240;
    setScrollPosition(slider.scrollLeft - 240);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    const updateScrollPosition = () => setScrollPosition(slider.scrollLeft);
    slider.addEventListener("scroll", updateScrollPosition);

    return () => slider.removeEventListener("scroll", updateScrollPosition);
  }, []);

  const isAtStart = scrollPosition <= 0;

  const isAtEnd =
    sliderRef.current &&
    scrollPosition >= sliderRef.current.scrollWidth - sliderRef.current.offsetWidth;

  return (
    <div className="slider">
      <p className="slider-title">Recommended for you</p>
    <div className="wrapper">
      
      <button
        className={`control-btn control-prev-btn ${isAtStart ? "hidden" : ""}`}
        onClick={handlePrev}
        disabled={isAtStart}
      >
        <i class="fa-solid fa-caret-left" />
      </button>
      
      <div className="carousel" ref={sliderRef}>
      
        {defaultImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={altTexts[index] || `Slide ${index + 1}`}
          />
        ))}
      </div>
      <button
        className={`control-btn control-next-btn ${isAtEnd ? "hidden" : ""}`}
        onClick={handleNext}
        disabled={isAtEnd}
      >
        <i class="fa-solid fa-caret-right" />
      </button>
      </div>
      
    </div>
  );
};

export default TopSlider;
