import React, { useState } from 'react';

//this component is a barebones chat window

function ChatWindow() {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();

        if (inputText.trim() !== '') {
            const newMessage = {
                text: inputText,
                timestamp: new Date().toLocaleTimeString(),
            };

            setMessages((currentMessages) => [...currentMessages, newMessage]);
            setInputText('');

            console.log(messages);
        }
    };

    const handleKeyDown = (e) => {
        console.log(e.key);
        if(e.key === 'Enter' && e.shiftKey) {
            setInputText((currentText) => currentText + '\n');
        }
        else if (e.key === 'Enter') {
            handleSendMessage(e);
        }
    };

    return (
        <div className="chat-window">
            <div className="chat-messages">
                {messages.map((message, index) => (
                <div key={index} className="chat-message">
                    <span className="timestamp">{message.timestamp}</span>
                    <p>{message.text}</p>
                </div>
                ))}
            </div>

            <form className="chat-input" onSubmit={handleSendMessage}>
                <textarea
                value={inputText}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                row={3}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ChatWindow;
