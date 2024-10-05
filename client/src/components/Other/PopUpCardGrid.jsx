import React from 'react';
import { useInView } from 'react-intersection-observer';
import PopUpCard from './PopUpCard';
import '../../CSS/PopUpCardGrid.css';

import { FaCar } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";

const PopUpCardGrid = () => {
  const { ref: cardRef1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: cardRef2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: cardRef3, inView: inView3 } = useInView({ triggerOnce: true });

  const cards = [
    {
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'الشفافية',
      description: 'نلتزم بتوفير معلومات واضحة وعروض عادلة، دون أي تكاليف خفية أو مفاجآت غير متوقعة.',
      icon: <FaCar />,
      ref: cardRef1,
      inView: inView1
    },
    {
      image: 'https://images.unsplash.com/photo-1515569067071-ec3b51335dd0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'الابتكار',
      description: 'نعمل باستمرار على تحسين خدماتنا من خلال التكنولوجيا الحديثة لتقديم حلول سريعة وفعالة.',
      icon: <FaHandshake />,
      ref: cardRef2,
      inView: inView2
    },
    {
      image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'الجودة',
      description: 'نختار بعناية الورش المتعاونة معنا لضمان تقديم خدمات عالية الجودة تلبي تطلعات عملائنا.',
      icon: <GrUserWorker />,
      ref: cardRef3,
      inView: inView3
    }
  ];

  return (
    <div id='popupcardcontainer'>   
      <h2>قيمنا</h2> 
      <div className="popcard-grid">
        {cards.map((card, index) => (
          <div ref={card.ref} key={index}>
            <PopUpCard
              image={card.image}
              title={card.title}
              description={card.description}
              icon={card.icon}
              isVisible={card.inView}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopUpCardGrid;