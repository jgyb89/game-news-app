import TopSlider from "../../components/ui/TopSlider";
import { sliderImages } from "../../components/ui/SliderIndex";
import DiscoverList from "./DiscoverList";
import './Discover.scss'

const Discover = () => {
  return (
    <div>
            <TopSlider defaultImages={sliderImages} className='slider-home'/>

    <DiscoverList />
    </div>
  )
}

export default Discover;