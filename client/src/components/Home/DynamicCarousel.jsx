import React from 'react';
import { useState } from 'react';
import './Home.css';

const workshops = [
    { id: 1, name: 'Workshop A', rating: 4.5, image: 'workshop-a.jpg' },
    { id: 2, name: 'Workshop B', rating: 4.8, image: 'workshop-b.jpg' },
    { id: 3, name: 'Workshop C', rating: 4.6, image: 'workshop-c.jpg' },
];

const WorkshopCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextWorkshop = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % workshops.length);
    };

    const prevWorkshop = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + workshops.length) % workshops.length);
    };

    const { name, rating, image } = workshops[currentIndex];

    return (
        <section className="workshop-carousel">
            <h2>Featured Workshops</h2>
            <div className="carousel">
                <button onClick={prevWorkshop}>Prev</button>
                <div className="workshop-card">
                    <img src={image} alt={name} />
                    <h3>{name}</h3>
                    <p>Rating: {rating}</p>
                </div>
                <button onClick={nextWorkshop}>Next</button>
            </div>
        </section>
    );
};

export default WorkshopCarousel;