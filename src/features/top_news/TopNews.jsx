import './TopNews.scss'

const TopNews = ({ image, title, }) => {
  return (
    <div className="top-news">
      <img src={image} atl={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default TopNews;
