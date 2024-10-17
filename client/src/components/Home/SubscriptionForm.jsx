import React, { useState } from 'react';
import './Styles/SubscriptionForm.css';

const SubscriptionForm = ({ onSubscribe }) => {
    const [feedUrl, setFeedUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Call API to subscribe to the feed
        await fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ feedUrl }),
        });
        setFeedUrl('');
        onSubscribe(); // Refresh the feeds list
    };

    return (
        <form onSubmit={handleSubmit} className="subscription-form">
            <h2>إشترك في نشرتنا الإخبارية</h2>
            <div className="inputcont">
                <input
                    type="text"
                    value={feedUrl}
                    onChange={(e) => setFeedUrl(e.target.value)}
                    placeholder="أدخل بريدك الإلكتروني"
                    required
                />
                <button type="submit">إشترك</button>
            </div>
        </form>
    );
};

export default SubscriptionForm;