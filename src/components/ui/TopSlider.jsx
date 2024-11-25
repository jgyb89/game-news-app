import React, { useRef, useState, useEffect } from "react";
import "./TopSlider.scss";

const TopSlider = ({ fetchImages, defaultImages = [], altTexts = [], carouselSettings = {} }) => {
  const carouselRef = useRef(null);
  const [images, setImages] = useState(defaultImages);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Fetch images dynamically if fetchImages is provided
  useEffect(() => {
    const loadImages = async () => {
      if (fetchImages) {
        const fetchedImages = await fetchImages();
        setImages(fetchedImages);
      }
    };
    loadImages();
  }, [fetchImages]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleMouseLeave = () => setIsDragging(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    carousel.addEventListener("mousedown", handleMouseDown);
    carousel.addEventListener("mousemove", handleMouseMove);
    carousel.addEventListener("mouseup", handleMouseUp);
    carousel.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      carousel.removeEventListener("mousedown", handleMouseDown);
      carousel.removeEventListener("mousemove", handleMouseMove);
      carousel.removeEventListener("mouseup", handleMouseUp);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <div className="wrapper">
      <div className="carousel" ref={carouselRef} style={{ ...carouselSettings }}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={altTexts[index] || `Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TopSlider;
