import React, { useState } from 'react';
import '../../CSS/NewsMain.css';

const newsData = {
    design: [
      {
        title: "ثورة التصميم العصري في الأثاث",
        description: "التصميم العصري للأثاث يعيد تعريف المساحات الداخلية بطرق غير مسبوقة.",
        image: "https://plus.unsplash.com/premium_photo-1670076513880-f58e3c377903?q=80&w=1436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "10 سبتمبر 2024",
      },
      {
        title: "أفضل الألوان المستخدمة في ديكور الأثاث الحديث",
        description: "اختيار الألوان المثالية لدمجها مع الأثاث العصري للحصول على طابع فريد.",
        image: "https://plus.unsplash.com/premium_photo-1664303562514-3a923e14732e?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "5 سبتمبر 2024",
      },
      {
        title: "الأثاث القابل للتعديل: كيف يجمع بين الجمال والوظيفة",
        description: "أثاث متعدد الاستخدامات يمكنك تعديله ليلائم أي مساحة منزلية بسهولة.",
        image: "https://images.unsplash.com/photo-1641893979088-87d4d9604c36?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "12 سبتمبر 2024",
      },
      {
        title: "تصميم الأثاث الخارجي: أفضل النصائح لمظهر خارجي أنيق",
        description: "كيف تختار أثاث الحدائق والشرفات ليجمع بين الراحة والمتانة.",
        image: "https://plus.unsplash.com/premium_photo-1684175656278-3759b542bb21?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "18 سبتمبر 2024",
      },
    ],
    advises: [
      {
        title: "كيفية ترتيب الأثاث في المساحات الصغيرة",
        description: "استفد من كل زاوية في منزلك مع هذه النصائح لترتيب الأثاث في المساحات الضيقة.",
        image: "https://plus.unsplash.com/premium_photo-1724061885068-f10ceeb9f84c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "8 سبتمبر 2024",
      },
      {
        title: "أهم الإرشادات لاختيار الأثاث المثالي لغرفة النوم",
        description: "تعرف على كيفية اختيار الأثاث الأنسب الذي يحقق الراحة والجمال لغرفة نومك.",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "4 سبتمبر 2024",
      },
      {
        title: "كيف تحافظ على جودة الأثاث الخشبي لفترات طويلة",
        description: "إرشادات حول صيانة الأثاث الخشبي وحمايته من التلف والرطوبة.",
        image: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "10 سبتمبر 2024",
      },
      {
        title: "اختيار الأثاث المناسب للمساحات المفتوحة",
        description: "كيف يمكن استخدام الأثاث لفصل المساحات الكبيرة وجعلها أكثر راحة.",
        image: "https://images.unsplash.com/photo-1581994574720-f60299904853?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "14 سبتمبر 2024",
      },   
    ],
    material: [
      {
        title: "أنواع الخشب المثالي لصناعة الأثاث",
        description: "تعرف على أكثر أنواع الخشب المستخدمة في صناعة الأثاث وجودتها.",
        image: "https://plus.unsplash.com/premium_photo-1673770408482-633babf2d18d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2 سبتمبر 2024",
      },
      {
        title: "كيف تختار القماش المناسب لأثاثك",
        description: "اختيار الأقمشة المثالية يعتمد على الاستخدام والمتانة وكذلك المظهر الجمالي.",
        image: "https://images.unsplash.com/photo-1523212727988-82c430c79c8e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "30 أغسطس 2024",
      },
      {
        title: "الأثاث القابل للتحويل: مستقبل الأثاث متعدد الاستخدامات",
        description: "كيف يساهم الابتكار في تحويل الأثاث إلى قطع متعددة الأغراض تناسب أي مساحة.",
        image: "https://images.woodenstreet.de/image/data/Blog%20images/3dec/3%20.jpg",
        date: "20 سبتمبر 2024",
      },
      {
        title: "دمج الذكاء الاصطناعي في تصميم الأثاث",
        description: "كيف يُستخدم الذكاء الاصطناعي لتحليل احتياجات العملاء وتصميم الأثاث بشكل مثالي.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "22 سبتمبر 2024",
      },      
    ],
    creative: [
      {
        title: "الأثاث الذكي: كيف تساهم التكنولوجيا في تحسين منازلنا",
        description: "اكتشف كيف يمكن للتكنولوجيا تحويل الأثاث العادي إلى تجربة ذكية ومريحة.",
        image: "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "15 سبتمبر 2024",
      },
      {
        title: "الاتجاهات المستقبلية في صناعة الأثاث المستدام",
        description: "استكشاف الطرق الجديدة لتصميم الأثاث المستدام مع الحفاظ على البيئة.",
        image: "https://plus.unsplash.com/premium_photo-1661770132071-026114fffb61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "12 سبتمبر 2024",
      },
    ],
    luxury: [
      {
        title: "أثاث الفخامة: كيف تحقق طابعاً راقياً في منزلك",
        description: "استعراض أفضل قطع الأثاث الفاخرة التي تضيف لمسة من الأناقة إلى منزلك.",
        image: "https://images.unsplash.com/photo-1687180498602-5a1046defaa4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "18 سبتمبر 2024",
      },
      {
        title: "أهم ماركات الأثاث الفاخرة في العالم",
        description: "تعرف على أشهر العلامات التجارية التي تقدم أثاثاً يجمع بين الجودة والفخامة.",
        image: "https://images.unsplash.com/photo-1653667203890-ab66f7af406d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "13 سبتمبر 2024",
      },
      {
        title: "أحدث صيحات الأثاث الفاخر لعام 2024",
        description: "تعرّف على أبرز اتجاهات الأثاث الفاخر لهذا العام وكيفية دمجها في منزلك.",
        image: "https://images.unsplash.com/photo-1680503146476-abb8c752e1f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "19 سبتمبر 2024",
      },
      {
        title: "الأثاث الإيطالي الفاخر: رمز الفخامة والتصميم الراقي",
        description: "نظرة على أشهر قطع الأثاث الإيطالية التي تجسد الفخامة والجودة العالية.",
        image: "https://plus.unsplash.com/premium_photo-1683120695152-ce173337af29?q=80&w=1535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "25 سبتمبر 2024",
      },      
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