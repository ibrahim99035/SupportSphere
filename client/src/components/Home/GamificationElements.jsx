import React from 'react';
import './Home.css';

const badges = [
    { id: 1, title: 'Problem Solver', description: 'You have solved 5 problems!' },
    { id: 2, title: 'Workshop Explorer', description: 'You have attended 3 workshops!' },
];

const GamificationBadges = () => {
    return (
        <section className="gamification-badges">
            <h2>Your Achievements</h2>
            {badges.map(badge => (
                <div key={badge.id} className="badge-card">
                    <h3>{badge.title}</h3>
                    <p>{badge.description}</p>
                </div>
            ))}
        </section>
    );
};

export default GamificationBadges;