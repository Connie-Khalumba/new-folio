import React, { useState } from 'react';

const WorksItems = ({ item }) => {
  const [showMore, setShowMore] = useState(false);
  const toggleDescription = () => setShowMore(!showMore);

  return (
    <div className="work__card">
      <img src={item.image} alt={item.title} className="work__img" />
      <h3 className="work__title">{item.title}</h3>

      <p className="work__description">
        {showMore ? item.description : `${item.description.substring(0, 60)}...`}
        {item.description.length > 60 && (
          <button onClick={toggleDescription} className="read-more-btn">
            {showMore ? 'Read less' : 'Read more'}
          </button>
        )}
      </p>

      <a
        href={item.link}
        className="work__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorksItems;
