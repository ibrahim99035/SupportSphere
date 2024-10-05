import React from 'react';

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import PartenersSlider from '../components/Sliders/PartenersSlider';
import HeroSection from '../components/Other/HeroSection';
import Up from '../components/Other/Up';

import Icon from '/icons/SpportSphere.png';

import '../CSS/Parteners.css'

const Parteners = () => {

    return(
        <div>
            <div className="overlay-image"></div>
            <Header />
            <HeroSection />
            <div id='parteners-heading'>
                <h1>تعرف على شركاؤنا</h1>
                <img src={Icon} alt="Malls Logo" />
            </div>
            <section id="partners">
                <div class="container">
                    <h2>شركاؤنا</h2>
                    <p>نحن في مصة معارض الضجيج للأثاث نؤمن بأن النجاح لا يأتي بمفرده، بل يتحقق من خلال التعاون والشراكات المثمرة. نحن فخورون بشركائنا الذين يشاركونا الرؤية والتزامنا بتقديم أفضل الحلول والخدمات في عالم الأثاث.</p>

                    <div class="partners-group">
                    <h3>شركاؤنا الاستراتيجيون</h3>
                    <p>لقد بنينا علاقات قوية مع أبرز الشركات والمتخصصين في صناعة الأثاث، والذين يساهمون بشكل كبير في تعزيز جودة عروضنا. هؤلاء الشركاء يجلبون معنا خبراتهم ومعرفتهم التي لا تقدر بثمن، مما يتيح لنا تقديم منتجات متميزة تلبي توقعات عملائنا.</p>
                    </div>

                    <div class="partners-group">
                    <h3>موردونا الموثوقون</h3>
                    <p>نحن نعمل مع شبكة واسعة من الموردين الموثوقين الذين يوفرون لنا أحدث وأعلى جودة من المواد الخام. بفضلهم، نستطيع أن نقدم لعملائنا أثاثًا متينًا وجميلًا، يجمع بين التصميم العصري والمتانة.</p>
                    </div>

                    <div class="partners-group">
                    <h3>شركاء التوزيع</h3>
                    <p>تعاوننا مع شركاء التوزيع يساعدنا في توسيع نطاق خدماتنا، وتقديم منتجاتنا إلى العملاء في مختلف المناطق بسهولة وسرعة. بفضل هؤلاء الشركاء، نتمكن من ضمان وصول منتجاتنا إلى عملائنا في الوقت المحدد وبأعلى جودة.</p>
                    </div>

                    <div class="partners-group">
                    <h3>مستشارونا وخبراؤنا</h3>
                    <p>نحن ممتنون لمستشارينا وخبرائنا الذين يساهمون بخبراتهم في تطوير استراتيجياتنا وتحسين خدماتنا. إن معرفتهم العميقة وإسهاماتهم القيمة تلعب دورًا كبيرًا في تحقيق أهدافنا وتقديم أفضل تجربة لعملائنا.</p>
                    </div>

                    <p>شكرًا لشركائنا الذين يجعلون من معارض الضجيج للأثاث منصة متميزة ومؤثرة في عالم الأثاث. نحن نتطلع إلى الاستمرار في تحقيق النجاح المشترك ونبني المزيد من الشراكات الناجحة في المستقبل.</p>
                </div>
            </section>

            <PartenersSlider />
            <Up />
            <Footer />
        </div>
    );

};

export default Parteners;