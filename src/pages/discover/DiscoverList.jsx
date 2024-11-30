import React from "react";
import "./DiscoverList.scss";
import contentData from "./discoverData";

const DiscoverList = () => {
  const renderBatches = () => {
    const batches = [];
    for (let i = 0; i < contentData.length; i += 10) {
      const batch = contentData.slice(i, i + 10);
      batches.push(
        <div key={i} className="discover-container">
          {batch.map((item, index) => (
            <div key={index} className={`tile tile-${(index % 5) + 1}`}>
              <img src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      );
    }
    return batches;
  };

  return <div>{renderBatches()}</div>;
};

export default DiscoverList;
