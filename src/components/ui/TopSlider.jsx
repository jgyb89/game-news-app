// Importing React library, along with useRef, useState, and useEffect hooks.
import React, { useRef, useState, useEffect } from "react";
// Importing the associated SCSS file for styles.
import "./TopSlider.scss";

// TopSlider component definition. It accepts props for defaultImages (an array of image URLs) and altTexts (an array of alternative texts for images).
const TopSlider = ({ defaultImages = [], altTexts = [] }) => {
  // useRef creates a reference to the slider DOM element for direct manipulation.
  const sliderRef = useRef(null);

  // useState manages the current scroll position of the slider.
  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to handle the "Next" button click event.
  // It scrolls the slider to the right by 270px and updates the scroll position state.
  const handleNext = () => {
    const slider = sliderRef.current; // Access the DOM element using the ref.
    slider.scrollLeft += 270; // Increment the scrollLeft property to move right.
    setScrollPosition(slider.scrollLeft + 270); // Update the state with the new scroll position.
  };

  // Function to handle the "Previous" button click event.
  // It scrolls the slider to the left by 270px and updates the scroll position state.
  const handlePrev = () => {
    const slider = sliderRef.current;
    slider.scrollLeft -= 270; // Decrement the scrollLeft property to move left.
    setScrollPosition(slider.scrollLeft - 270); // Update the state with the new scroll position.
  };

  // useEffect sets up an event listener for the slider's scroll event to dynamically update the scroll position.
  useEffect(() => {
    const slider = sliderRef.current;

    // Callback function to update the scroll position state when the slider is scrolled.
    const updateScrollPosition = () => setScrollPosition(slider.scrollLeft);

    // Attach the scroll event listener to the slider element.
    slider.addEventListener("scroll", updateScrollPosition);

    // Cleanup function to remove the event listener when the component unmounts.
    return () => slider.removeEventListener("scroll", updateScrollPosition);
  }, []); // Empty dependency array ensures this runs only once, when the component mounts.

  // Boolean flag to determine if the slider is at the start.
  const isAtStart = scrollPosition <= 0;

  // Boolean flag to determine if the slider is at the end.
  // The slider is considered at the end when the scroll position reaches the maximum scrollable width.
  const isAtEnd =
    sliderRef.current &&
    scrollPosition >= sliderRef.current.scrollWidth - sliderRef.current.offsetWidth;

  // JSX to render the slider component.
  return (
    <div className="wrapper">
      {/* "Previous" button with conditional rendering for visibility and disabling. */}
      <button
        className={`control-btn control-prev-btn ${isAtStart ? "hidden" : ""}`}
        onClick={handlePrev}
        disabled={isAtStart} // Disable button if at the start of the slider.
      >
        <i class="fa-solid fa-caret-left" />
      </button>

      {/* The main carousel container, which contains the images to slide through. */}
      <div className="carousel" ref={sliderRef}>
        {defaultImages.map((src, index) => (
          // Rendering each image with its source and alternative text.
          <img
            key={index} // Unique key for each image to help React efficiently manage updates.
            src={src} // Image source URL.
            alt={altTexts[index] || `Slide ${index + 1}`} // Fallback alt text if not provided.
          />
        ))}
      </div>

      {/* "Next" button with conditional rendering for visibility and disabling. */}
      <button
        className={`control-btn control-next-btn ${isAtEnd ? "hidden" : ""}`}
        onClick={handleNext}
        disabled={isAtEnd} // Disable button if at the end of the slider.
      >
       <i class="fa-solid fa-caret-right" />
      </button>
    </div>
  );
};

// Exporting the TopSlider component for use in other parts of the application.
export default TopSlider;
