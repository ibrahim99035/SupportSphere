import React from 'react';
import './Home.css';

const recommendations = [
    { id: 1, title: 'Workshop A', description: 'Great for engine issues!' },
    { id: 2, title: 'Workshop B', description: 'Perfect for brake problems!' },
];

const PersonalizedRecommendations = () => {
    return (
        <section className="recommendations">
            <h2>Recommended for You</h2>
            {recommendations.map(rec => (
                <div key={rec.id} className="recommendation-card">
                    <h3>{rec.title}</h3>
                    <p>{rec.description}</p>
                </div>
            ))}
        </section>
    );
};

export default PersonalizedRecommendations;