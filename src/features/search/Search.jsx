// Search.jsx
import React, { useEffect, useState } from "react";
import "./Search.scss";

const Search = ({ isVisible }) => {
  const [hiddenClass, setHiddenClass] = useState("");

  useEffect(() => {
    if (isVisible) {
      setHiddenClass(""); // Remove hidden class when modal is visible
    } else {
      setHiddenClass("hidden"); // Add hidden class when modal is not visible
    }
  }, [isVisible]);

  return (
    <div className={`search-container ${hiddenClass}`}>
      <div className="search-bar">
        <p>Search</p>
      </div>
      <div>
        <p> Trending Topics <i class="fa-solid fa-arrow-trend-up"> </i></p>
        <hr />
        <p>Nvidia RTX 5090</p>
        <hr />
        <p>Nvidia RTX 5090</p>
        <hr />
        <p>Nvidia RTX 5090</p>
        <hr />
        <p>Nvidia RTX 5090</p>
        <hr />
        <p>Nvidia RTX 5090</p>
        <hr />
        <p>Nvidia RTX 5090</p>
      </div>
    </div>
  );
};

export default Search;