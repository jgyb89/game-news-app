import React, { useRef, useState, useEffect } from "react";
import "./TopSlider.scss";

const TopSlider = ({ defaultImages = [], altTexts = [] }) => {
  const sliderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleNext = () => {
    const slider = sliderRef.current;
    slider.scrollLeft += 270;
    setScrollPosition(slider.scrollLeft + 270);
  };

  const handlePrev = () => {
    const slider = sliderRef.current;
    slider.scrollLeft -= 270;
    setScrollPosition(slider.scrollLeft - 270);
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
    <div className="wrapper">
      <button
        className={`control-btn control-prev-btn ${isAtStart ? "hidden" : ""}`}
        onClick={handlePrev}
        disabled={isAtStart}
      >
        ◀
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
        ▶
      </button>
    </div>
  );
};

export default TopSlider;
