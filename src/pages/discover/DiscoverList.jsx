import DiscoverContent from './DiscoverContent';
import discoverData from './discoverData';
import './DiscoverList.scss'

const DiscoverList = () => {
  return (
    <div className='discover-list'>
      {discoverData.map((discover) => (
        <DiscoverContent
          key={discover.id}
          image={discover.image}
        />
      ))}
    </div>
  );
};

export default DiscoverList;