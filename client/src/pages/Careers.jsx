import React, { useState } from 'react';
import '../CSS/Careers.css';

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import HeroSection from '../components/Other/HeroSection';
import Up from '../components/Other/Up';

import Icon from '/icons/SpportSphere.png'

const jobListings = [
  {
    title: 'أخصائي خدمة العملاء',
    location: 'القاهرة, مصر',
    type: 'دوام كامل',
    description: 'تقديم خدمة ودعم استثنائي لعملائنا. التعامل مع الاستفسارات وحل المشكلات وضمان رضا العملاء.',
    requirements: [
      'مهارات تواصل ممتازة',
      'خبرة سابقة في خدمة العملاء',
      'القدرة على التعامل مع المواقف الصعبة بهدوء'
    ],
    benefits: [
      'تدريب ونمو مهني',
      'خصومات الموظفين',
      'برامج صحية ورفاهية'
    ]
  }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = (index) => {
    setSelectedJob(index === selectedJob ? null : index);
  };

  return (
    <>
      <div className="overlay-image"></div>
      <Header />
      <HeroSection />
      <section id="careers">
        <div className="container">
          <h2>فرص العمل لدينا</h2>
          <div id='logo-container'>
            <img src={Icon} alt="Malls Logo" />
          </div>
          <div className="job-listings">
            {jobListings.map((job, index) => (
              <div
                key={index}
                className={`job-card ${selectedJob === index ? 'expanded' : ''}`}
                onClick={() => handleJobClick(index)}
              >
                <h3>{job.title}</h3>
                <p className="location">{job.location}</p>
                <p className="type">{job.type}</p>
                <p className="description">{job.description}</p>
                {selectedJob === index && (
                  <div className="job-details">
                    <h4>المتطلبات</h4>
                    <ul>
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                    <h4>المزايا</h4>
                    <ul>
                      {job.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="apply-now">
            <h3>تقديم طلب</h3>
            <p>إذا كنت مهتمًا بإحدى الوظائف، يرجى إرسال سيرتك الذاتية ورسالة تغطية إلى <a href="mailto:jobs@example.com">jobs@example.com</a>.</p>
          </div>
        </div>
      </section>
      <Up />
      <Footer />
    </>
  );
};

export default Careers;