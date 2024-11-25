import React from "react";
import TopSlider from "../components/ui/TopSlider";
import { sliderImages } from "../components/ui/SliderIndex";
import "./Home.scss";

export const Home = () => {
  return (
    <div>
      <TopSlider defaultImages={sliderImages} />
      <div className="main-container">
        <div className="content"></div>
      </div>
      <aside>
        <div>
          <h2>Top News</h2>
        </div>
      </aside>
    </div>
  );
};

export default Home;
