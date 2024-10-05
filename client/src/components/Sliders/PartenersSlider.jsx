import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../CSS/slider.css';

const PartenersSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Autoplay the slides
    autoplaySpeed: 2000, // Speed of autoplay (in ms)
    pauseOnHover: true, // Pause when hovering
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container" id="parteners">
      <h2>شركائنا</h2>
      <Slider {...settings}>
        <div>
          <img src="https://purepng.com/public/uploads/large/purepng.com-ford-car-logologocar-brand-logoscarsford-car-logo-17015274289717edgv.png" alt="Slide 1" />
        </div>
        <div>
          <img src="https://logos-world.net/wp-content/uploads/2021/04/Chevrolet-Logo.png" alt="Slide 2" />
        </div>
        <div>
          <img src="https://w7.pngwing.com/pngs/509/532/png-transparent-volkswagen-group-car-logo-volkswagen-car-logo-brand-emblem-trademark-volkswagen-thumbnail.png" alt="Slide 3" />
        </div>
        <div>
          <img src="https://logos-world.net/wp-content/uploads/2023/04/Volkswagen-Logo.png" alt="Slide 4" />
        </div>
        <div>
          <img src="https://fabrikbrands.com/wp-content/uploads/Car-Logos-With-Stars-13-1200x750.png" alt="Slide 5" />
        </div>
      </Slider>
    </div>
  );
};

export default PartenersSlider;