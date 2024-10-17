import React from 'react';
import './Home.css';

const trendingProblems = [
    { id: 1, title: 'Engine Stalling', solutions: 'Common causes include fuel issues...' },
    { id: 2, title: 'Brakes Squeaking', solutions: 'Check brake pads and fluid levels...' },
];

const TrendingProblems = () => {
    return (
        <section className="trending-problems">
            <h2>Trending Problems</h2>
            {trendingProblems.map(problem => (
                <div key={problem.id} className="problem-card">
                    <h3>{problem.title}</h3>
                    <p>{problem.solutions}</p>
                </div>
            ))}
        </section>
    );
};

export default TrendingProblems;