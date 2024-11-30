import TopSlider from "../../components/ui/TopSlider";
import { sliderImages } from "../../components/ui/SliderIndex";
import NewsList from "./NewsList";
import "./News.scss";

const News = () => {
  return (
    <div className="page-container">
      <TopSlider defaultImages={sliderImages} className="slider-home" />
      <div className="news-section">
        <NewsList />
      </div>
    </div>
  );
};

export default News;
