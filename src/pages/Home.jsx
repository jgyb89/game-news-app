import React from "react";
import TopSlider from "../components/ui/TopSlider";
import { sliderImages } from "../components/ui/SliderIndex";
import PostList from '../features/Posts/PostList';
import "./Home.scss";
import TopNewsList from "../features/top_news/TopNewsList";

export const Home = () => {
  return (
    <div className="top-news-home">
      <TopSlider defaultImages={sliderImages} className='slider-home'/>
      
      <div className="main-container">
        <PostList />
      <aside>
        <div>
          <h2>Top News</h2>
          <TopNewsList />
        </div>
      </aside>
      </div>
    </div>
  );
};

export default Home;