import React from 'react';
import './Styles/AnimatedInfographic.css';

const stats = [
    { value: 1000, label: 'ثفقة ناجحة' },
    { value: 300, label: 'ورشة موثوقة' },
    { value: 1500, label: 'عميل راض' },
];

const AnimatedInfographic = () => {
    return (
        <section className="infographic">
            <h2>إنجازات المنصة</h2>
            <div className="stats">
                {stats.map((stat) => (
                    <div key={stat.label} className="stat-card">
                        <h3>{stat.value}</h3>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AnimatedInfographic;