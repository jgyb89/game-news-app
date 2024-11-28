import TopNews from './TopNews'
import topNewsData from './topNewsData'

const TopNewsList = () => {
  return (
    <div className="post-list">
      {topNewsData.map((topNews) => (
        <TopNews
          key={topNews.id}
          image={topNews.image}
          title={topNews.title}
        />
      ))}
    </div>
  );
};

export default TopNewsList;