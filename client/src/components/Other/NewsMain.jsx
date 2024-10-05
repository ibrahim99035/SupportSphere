import React, { useState } from 'react';
import '../../CSS/NewsMain.css';

const newsData = {
    design: [
      {}
    ],
    advises: [
      {}   
    ],
    material: [
      {}      
    ],
    creative: [
      {}
    ],
    luxury: [
      {}      
    ],
};  

const NewsMain = () => {
  const [selectedCategory, setSelectedCategory] = useState('design');
  
  const breakingNews = [
    "Breaking: Major advancements in AI!", 
    "Exclusive: A sneak peek into the future of decentralized finance.", 
    "Health: New wellness trends are taking over in 2024!"
  ];

  const renderNews = (category) => {
    return newsData[category].map((newsItem, index) => (
      <div className="news-card" key={index}>
        <img src={newsItem.image} alt={newsItem.title} />
        <div className="news-card-content">
          <h3>{newsItem.title}</h3>
          <p>{newsItem.description}</p>
          <span>{newsItem.date}</span>
        </div>
      </div>
    ));
  };

  return (
    <div className="news-section">
      {/* Breaking News Ticker */}
      {/* <div className="news-ticker">
        <div className="ticker-wrap">
          <div className="ticker-content">
            {breakingNews.map((news, idx) => (
              <span key={idx} className="ticker-item">{news}</span>
            ))}
          </div>
        </div>
      </div> */}

      {/* News Tabs */}
      <div className="news-tabs">
        <button onClick={() => setSelectedCategory('design')} className={selectedCategory === 'design' ? 'active' : ''}>
          التصميم
        </button>
        <button onClick={() => setSelectedCategory('advises')} className={selectedCategory === 'advises' ? 'active' : ''}>
          نصائح
        </button>
        <button onClick={() => setSelectedCategory('material')} className={selectedCategory === 'material' ? 'active' : ''}>
          المواد و الخامات
        </button>
        <button onClick={() => setSelectedCategory('creative')} className={selectedCategory === 'creative' ? 'active' : ''}>
          الإبداع و الإبتكار
        </button>
        <button onClick={() => setSelectedCategory('luxury')} className={selectedCategory === 'luxury' ? 'active' : ''}>
          الفخامة
        </button>
      </div>

      {/* Featured News */}
      {/* <div className="featured-news">
        <img src={newsData[selectedCategory][0].image} alt="Featured" />
        <div className="featured-news-content">
          <h2>{newsData[selectedCategory][0].title}</h2>
          <p>{newsData[selectedCategory][0].description}</p>
          <span>{newsData[selectedCategory][0].date}</span>
        </div>
      </div> */}

      {/* News Grid */}
      <div className="news-grid">
        {renderNews(selectedCategory)}
      </div>
    </div>
  );
};

export default NewsMain;