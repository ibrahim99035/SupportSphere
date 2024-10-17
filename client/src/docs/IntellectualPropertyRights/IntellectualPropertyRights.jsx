import React from 'react';
import './IntellectualPropertyRights.css';
import DiyarahLogo from '/icons/SpportSphere.png'

import Header from '../../components/Layout/Header'
import HeroSection from '../../components/Other/HeroSection';
import Footer from '../../components/Layout/Footer';
import Up from '../../components/Other/Up';

const IntellectualPropertyRights = () => {
  return (
    <>
      <div className='overlay-image'></div>
      <Header />
      <HeroSection />
      <Up />
      <div className="intellectual-property-rights-container">
        <header>
          <h1 className="intellectual-property-rights-title">حقوق الملكية الفكرية</h1>
          <p>تُعد حقوق الملكية الفكرية جزءًا أساسيًا من القوانين التي تحمي الإبداعات الفكرية والابتكارات. نحن في <strong>نطاق الدعم</strong> نلتزم بحماية حقوق الملكية الفكرية لمستخدمينا وكذلك حقوقنا. فيما يلي بعض النقاط الأساسية المتعلقة بحقوق الملكية الفكرية:</p>
        </header>

        <section>
          <h2>1. حقوق النشر</h2>
          <p>تُعتبر جميع المحتويات المقدمة على منصة <strong>نطاق الدعم</strong>، بما في ذلك النصوص والصور والشعارات، محمية بموجب حقوق النشر. يُمنع نسخ أو توزيع أو إعادة إنتاج أي محتوى دون الحصول على إذن مسبق.</p>
        </section>

        <section>
          <h2>2. العلامات التجارية</h2>
          <p>جميع العلامات التجارية والأسماء التجارية المستخدمة على منصة <strong>نطاق الدعم</strong> هي ملك لأصحابها. يُحظر استخدام أي علامة تجارية أو اسم تجاري بدون إذن مسبق.</p>
        </section>

        <section>
          <h2>3. المحتوى المقدم من المستخدم</h2>
          <p>عند تقديم محتوى على المنصة، فإنك تمنح <strong>نطاق الدعم</strong> ترخيصًا غير محدود لاستخدام هذا المحتوى. يجب أن تضمن أن لديك الحق في تقديم هذا المحتوى وأنه لا ينتهك أي حقوق ملكية فكرية.</p>
        </section>

        <section>
          <h2>4. التبليغ عن الانتهاكات</h2>
          <p>إذا كنت تعتقد أن حقوق ملكيتك الفكرية قد تم انتهاكها على منصة <strong>نطاق الدعم</strong>، يرجى الاتصال بنا على الفور وسنقوم باتخاذ الإجراءات المناسبة.</p>
        </section>

        <section>
          <h2>5. الالتزام بالقوانين</h2>
          <p>نحن نلتزم بجميع القوانين المتعلقة بحقوق الملكية الفكرية. ونشجع مستخدمينا على احترام هذه القوانين والامتثال لها.</p>
        </section>

        <section>
          <h2>6. التعديلات على سياسة حقوق الملكية الفكرية</h2>
          <p>قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم إخطارك بأي تغييرات مهمة عبر البريد الإلكتروني أو من خلال إشعار على المنصة.</p>
        </section>

        <div id='plogoDiv'>
          <img src={DiyarahLogo} alt="Company Logo" className="plogo" loading="lazy" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IntellectualPropertyRights;
