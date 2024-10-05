import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../CSS/slider.css';

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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

  const testimonials = [
    {
      text: 'لقد تجاوزت الشركة جميع توقعاتنا. تفانيهم وخبراتهم لا مثيل لهما.',
      author: 'أمل محمد، الرئيس التنفيذي لشركة XYZ',
    },
    {
      text: 'نحن متحمسون للنتائج. كان الفريق محترفاً وسلم في الوقت المحدد.',
      author: 'حسن علي، مدير في شركة ABC',
    },
    {
      text: 'خدمة ودعم رائع. أوصي بشدة لأي احتياجات تجارية.',
      author: 'سارة حسين، مؤسسة شركة DEF',
    },
  ];

  return (
    <div className="slider-container" id="testimonial">
      <h2 className="slider-title">ماذا يقول الناس عنا</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-slide" key={index}>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">- {testimonial.author}</p>
          </div>
        ))}
      </Slider>
      <a href="#get-started" className="slider-button">المزيد</a>
    </div>
  );
};

export default TestimonialsSlider;