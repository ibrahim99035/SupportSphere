import React, { useState, useRef } from 'react';
import '../../docs/FAQ/FAQ.css';

const FAQCOM = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRef = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    {
      question: 'كيف يمكنني تقديم مشكلة سيارتي على المنصة؟',
      answer: 'يمكنك تسجيل حساب جديد في المنصة، وبعد تسجيل الدخول، ستجد خيار "إضافة مشكلة جديدة". قم بوصف المشكلة بوضوح، وأضف أي صور أو مقاطع فيديو إن وجدت لتساعد الورش في فهم المشكلة بشكل أفضل.',
    },
    {
      question: 'كيف يتم اختيار الورشة المناسبة لإصلاح سيارتي؟',
      answer: 'بعد تقديم مشكلتك، يقوم المشرفون بمراجعتها وتوثيقها في تقرير مفصل. هذا التقرير يتم إرساله إلى ورش التصليح المتخصصة التي تقدم عروضها. يمكنك بعدها اختيار الورشة التي تقدم العرض الأنسب من حيث السعر والجودة والمدة الزمنية.',
    },
    {
      question: 'هل يمكنني مقارنة العروض من الورش المختلفة؟',
      answer: 'نعم، يمكنك مقارنة العروض المقدمة من ورش التصليح بناءً على عدة معايير مثل السعر، التقييمات السابقة، والوقت المتوقع لإتمام الإصلاح. هذا يتيح لك اتخاذ قرار مستنير واختيار العرض الأفضل.',
    },
    {
      question: 'ما هي طرق الدفع المتاحة؟',
      answer: 'الدفع يتم مباشرة للورشة التي اخترتها بعد إتمام عملية الإصلاح. الورشة قد تقبل الدفع النقدي عند الاستلام أو توفر خيارات دفع أخرى مثل الدفع عبر البطاقات الائتمانية. يمكنك التنسيق مع الورشة بشأن طريقة الدفع المناسبة.',
    },
    {
      question: 'ماذا يحدث إذا لم أكن راضياً عن الإصلاح؟',
      answer: 'في حالة عدم الرضا عن الخدمة المقدمة، يمكنك التواصل مع فريق دعم العملاء على المنصة. سيتم مراجعة الشكوى والتواصل مع الورشة لضمان معالجة المشكلة وفقاً لضمان الجودة المقدم من الورشة.',
    },
    {
      question: 'هل يتم فحص السيارات في المنزل أم يجب نقل السيارة إلى الورشة؟',
      answer: 'هذا يعتمد على طبيعة المشكلة والورشة التي تقدم الخدمة. بعض الورش تقدم خدمات فحص وإصلاح متنقلة، حيث يمكن أن يأتي الفني إلى منزلك، بينما في حالات أخرى قد تحتاج لنقل سيارتك إلى الورشة حسب توصيات الفنيين.',
    }
  ];

  return (
    <>
      <div className='overlay-image'></div>
      <div className="faq-container">
        <h2 className="faq-title">الأسئلة الشائعة</h2>
        <div className="faq-items">
          {faqData.map((item, index) => (
            <div
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <span className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`}>+</span>
              </div>
              <div
                ref={(el) => (contentRef.current[index] = el)}
                className="faq-answer"
                style={{
                  maxHeight: activeIndex === index ? `${contentRef.current[index]?.scrollHeight}px` : '0px',
                  opacity: activeIndex === index ? '1' : '0',
                }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQCOM;