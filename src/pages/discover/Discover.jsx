import './Discover.scss'
import DiscoverList from "./DiscoverList";
import TopSlider from "../../components/ui/TopSlider";
import { sliderImages } from "../../components/ui/SliderIndex";

const Discover = () => {
  return (
    <div>
    <TopSlider defaultImages={sliderImages} className='discover-slider' />
    <DiscoverList />
    </div>
  )
}

export default Discover;