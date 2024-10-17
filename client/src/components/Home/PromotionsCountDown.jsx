import React, { useState, useEffect } from 'react';
import './Styles/PromotionsCountDown.css';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime > 0 ? prevTime - 1 : 0);
        }, 1000);
        
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="countdown-timer">
            <h2>Promotion Ends In:</h2>
            <div>{Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}</div>
        </section>
    );
};

export default CountdownTimer;