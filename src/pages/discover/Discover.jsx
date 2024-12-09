import TopSlider from "../../components/ui/TopSlider";
import { sliderImages } from "../../components/ui/SliderIndex";
import DiscoverList from "./DiscoverList";
import './Discover.scss'
import TopNewsList from "../../features/top_news/TopNewsList";

const Discover = () => {
  return (
    <div>
            <TopSlider defaultImages={sliderImages} className='slider-home'/>
            
    <DiscoverList />
    
    <aside>
    <div>
      <h2>Top News</h2>
      <TopNewsList />
    </div>
  </aside>
    </div>
  )
}

export default Discover; 