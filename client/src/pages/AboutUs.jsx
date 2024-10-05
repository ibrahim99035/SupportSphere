import React from 'react';
import '../CSS/AboutUs.css';

import Header from '../components/Layout/Header';
import HeroSection from '../components/Other/HeroSection';
import Footer from '../components/Layout/Footer';
import Up from '../components/Other/Up';
import TestimonialsSlider from '../components/Sliders/TestimonialsSlider';

const AboutUs = () => {
  return (
    <>
      <div className="overlay-image"></div>
      <Header />
      <HeroSection />
      <div className="about-us-container">
          <section className="about-us-intro">
              <h1 className="section-title">من نحن؟</h1>
              <p className="intro-text">
              نحن في Support Sphere نؤمن بأن الحلول الذكية والبسيطة هي المفتاح لراحة العملاء في كل ما يتعلق بصيانة وإصلاح السيارات. منصتنا تجمع بين أصحاب السيارات وأفضل ورش الصيانة المتخصصة لتقديم عروض شفافة وعادلة. نسعى لتوفير تجربة مميزة تساعد المستخدمين على حل مشاكل سياراتهم بسرعة وسهولة، وذلك من خلال تقديم الدعم الكامل من لحظة الإبلاغ عن المشكلة وحتى اختيار العرض الأنسب. نطمح إلى بناء مجتمع من الثقة والكفاءة، حيث يحصل الجميع على أفضل الخدمات بأسلوب احترافي.
              </p>
          </section>

          {/* <section className="our-mission-vision">
              <div className="mission-vision-item">
                  <h2 className="item-title">مهمتا</h2>
                  <p className="intro-text">
                      تقديم قيمة استثنائية وابتكار في كل مشروع نقوم به. ونحن نهدف إلى تجاوز توقعات العملاء من خلال التفاني والتميز.
                  </p>
              </div>
              <div className="mission-vision-item">
                  <h2 className="item-title">رؤيتنا</h2>
                  <p className="intro-text">
                      ضمان راحة و رضا العملاء من خلال الحفاظ على جودة المنتجات و توفير سهولة الوصول لنا.
                  </p>
              </div>
          </section>

          <section className="team-section">
              <h2 className="section-title">تعرف على فريقنا</h2>
              <div className="team-container">
                  {teamMembers.map((member, index) => (
                      <div className="team-card" key={index}>
                      <img src={member.image} alt={member.name} className="team-image" />
                      <div className="team-info">
                          <h3 className="team-name">{member.name}</h3>
                          <p className="team-role">{member.role}</p>
                          <p className="team-bio">{member.bio}</p>
                      </div>
                      </div>
                  ))}
              </div>
          </section>

          <section className="testimonials-section">
              <TestimonialsSlider />
          </section> */}
      </div>
      <Footer />
      <Up />
    </>
  );
};

// Sample team members data
const teamMembers = [
  {
    name: 'محمد أحمد',
    role: 'الرئيس التنفيذي',
    bio: 'محمد هو الرؤية وراء شركتنا، يقود الابتكار والنمو.',
    image: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
  },
  {
    name: 'فاطمة درويش',
    role: 'مديرة التكنولوجيا',
    bio: 'فاطمة تقود فريق التكنولوجيا لدينا بشغف للحلول الحديثة.',
    image: 'https://banner2.cleanpng.com/lnd/20240424/rbc/transparent-islamic-fashion-person-in-blue-hijab-with-black-background66290aeb5c39a1.55620265.webp',
  },
  {
    name: 'سليمان حسين',
    role: 'مدير المالية',
    bio: 'سليمان يدير شؤوننا المالية بخبرة ودقة.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLA994hpL3PMmq0scCuWOu0LGsjef49dyXVg&s',
  },
];

// Sample testimonials data
const testimonials = [
  {
    text: 'This company exceeded all our expectations. Their dedication and expertise are unmatched.',
    author: 'Emily Davis, CEO of XYZ Corp',
  },
  {
    text: 'We are thrilled with the results. The team was professional and delivered on time.',
    author: 'Robert Brown, Director at ABC Ltd.',
  },
  {
    text: 'Fantastic service and support. Highly recommend for any business needs.',
    author: 'Sarah Wilson, Founder of DEF Inc.',
  },
];

export default AboutUs;