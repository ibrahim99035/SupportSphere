import React from 'react';
import '../../CSS/PopUpCard.css'; 

const PopUpCard = ({ image, title, description, icon, isVisible }) => {
  return (
    <div className={`popcard ${isVisible ? 'visible' : ''}`}>
      <img src={image} alt={title} className="popcard-image" />
      <div className="popcard-content">
        <h3 className="popcard-title">{title}</h3>
        <p className="popcard-description">{description}</p>
        <br />
        <p className='popcard-icon'>{icon}</p>
      </div>
    </div>
  );
};

export default PopUpCard;
