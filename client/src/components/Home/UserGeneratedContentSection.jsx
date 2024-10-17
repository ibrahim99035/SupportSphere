import React from 'react';
import './Home.css';

const userStories = [
    { id: 1, story: 'I found a great workshop through this platform!', user: 'Jane D.', image: 'jane.jpg' },
    { id: 2, story: 'Fast responses and great service!', user: 'John S.', image: 'john.jpg' },
];

const UserStories = () => {
    return (
        <section className="user-stories">
            <h2>User Stories</h2>
            <div className="stories">
                {userStories.map((story) => (
                    <div key={story.id} className="story-card">
                        <img src={story.image} alt={story.user} />
                        <p>“{story.story}”</p>
                        <h4>- {story.user}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UserStories;
