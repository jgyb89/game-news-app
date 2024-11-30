import NewsContent from "./NewsContent";
import newsData from "./newsData";
import "./NewsList.scss";

const NewsList = () => {
  if (!newsData || newsData.length === 0) {
    console.error("No news data available or data is undefined.");
    return <p className="error-message">No news articles available.</p>;
  }

  return (
    <div className="news-list">
      {newsData.map((news) => (
        <NewsContent
          key={news.id}
          image={news.image}
          title={news.title}
          description={news.description}
        />
      ))}
    </div>
  );
};

export default NewsList;
