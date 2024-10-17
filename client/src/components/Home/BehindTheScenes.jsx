import React from 'react';
import './Home.css';

const teamMembers = [
    { id: 1, name: 'Alice', role: 'Project Manager', image: 'alice.jpg' },
    { id: 2, name: 'Bob', role: 'Developer', image: 'bob.jpg' },
];

const BehindTheScenes = () => {
    return (
        <section className="behind-the-scenes">
            <h2>Meet Our Team</h2>
            {teamMembers.map(member => (
                <div key={member.id} className="team-member">
                    <img src={member.image} alt={member.name} />
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                </div>
            ))}
        </section>
    );
};

export default BehindTheScenes;