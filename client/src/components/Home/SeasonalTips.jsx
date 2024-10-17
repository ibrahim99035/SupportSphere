import React from 'react';
import './Styles/SeasonalTips.css';

import { GiCarWheel } from "react-icons/gi";
import { MdOilBarrel } from "react-icons/md";
import { MdOutlineElectricBolt } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { FaCarCrash } from "react-icons/fa";
import { FaFireExtinguisher } from "react-icons/fa6";

const seasonalTips = [
    { id: 1, tip: 'تحقق من ضغط الإطارات قبل القيادة في فصل الشتاء!', tipicon: <GiCarWheel/> },
    { id: 2, tip: 'قم بتغيير زيت المحرك بانتظام لأفضل أداء.', tipicon:<MdOilBarrel/> },
    { id: 3, tip: 'تأكد من عمل مصابيح السيارة بشكل صحيح.', tipicon:<MdOutlineElectricBolt/> },
    { id: 4, tip: 'قم بفحص نظام التدفئة والتكييف قبل تغيير الفصول.', tipicon:<TbAirConditioning/> },
    { id: 5, tip: 'استبدل فرامل السيارة إذا لاحظت أي اهتزازات.', tipicon:<FaCarCrash/> },
    { id: 6, tip: 'تأكد من وجود طفاية حريق في سيارتك.', tipicon:<FaFireExtinguisher/> },
];

const SeasonalTips = () => {
    return (
        <section className="seasonal-tips">
            <h2>نصائح موسمية</h2>
            {seasonalTips.map(tip => (
                <div key={tip.id} className="tip-card">
                    <p>{tip.tip}</p>
                    <p id='iconplacement'>{tip.tipicon}</p>
                </div>
            ))}
        </section>
    );
};

export default SeasonalTips;