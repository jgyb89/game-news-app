import React, { useRef, useState, useEffect } from "react";
import "./NewsSlider.scss";
import newsData from "./newsData";
import NewsContent from "./NewsContent";

const NewsSlider = () => {
  const sliderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleNext = () => {
    const slider = sliderRef.current;
    slider.scrollLeft += 300; // Adjust as per card width
    setScrollPosition(slider.scrollLeft + 328);
  };

  const handlePrev = () => {
    const slider = sliderRef.current;
    slider.scrollLeft -= 300; // Adjust as per card width
    setScrollPosition(slider.scrollLeft - 328);
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
    <div className="news-slider">
      <button
        className={`control-btn control-prev-btn ${isAtStart ? "hidden" : ""}`}
        onClick={handlePrev}
        disabled={isAtStart}
      >
        <i className="fa-solid fa-caret-left" />
      </button>

      <div className="carousel" ref={sliderRef}>
        {newsData.map((news) => (
          <NewsContent
            key={news.id}
            image={news.image}
            title={news.title}
            description={news.description}
          />
        ))}
      </div>

      <button
        className={`control-btn control-next-btn ${isAtEnd ? "hidden" : ""}`}
        onClick={handleNext}
        disabled={isAtEnd}
      >
        <i className="fa-solid fa-caret-right" />
      </button>
    </div>
  );
};

export default NewsSlider;
