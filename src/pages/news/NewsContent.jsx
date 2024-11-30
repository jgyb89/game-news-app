import React from "react";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import "./News.scss";

const NewsContent = ({ image, title, description }) => {
  return (
    <div>
      <Card className="news-box">
        <CardBody className="news-card">
          {image ? (
            <CardImg className="news-img" src={image} alt={title || "News"} />
          ) : (
            <p>Image unavailable</p>
          )}
          <CardTitle>
            <h3>{title || "Untitled News"}</h3>
            <p>{description || "No description available."}</p>
          </CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default NewsContent;
