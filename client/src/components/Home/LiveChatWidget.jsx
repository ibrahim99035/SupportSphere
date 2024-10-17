import React, { useState } from 'react';
import './Styles/LiveChatWidget.css';
import { IoChatboxEllipses } from "react-icons/io5";


const LiveChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleChatToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="live-chat">
            <div onClick={handleChatToggle}>
                {isOpen ? <IoChatboxEllipses /> : <IoChatboxEllipses />}
            </div>
        </div>
    );
};

export default LiveChatWidget;
