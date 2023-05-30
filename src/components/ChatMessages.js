import React from 'react';

//this component is to display a history of messages forwarded and received

function ChatMessages(props) {

    const messages = props.messages;

    const displayMessages = messages.length == 0 ? "" : messages.map((message, index) => (
        <div key={index} className="chat-message">
            <span className="timestamp">{message.timestamp}</span>
            <p>{message.text}</p>
        </div>
    ));

    return (
        <div className="chat-messages">
            {displayMessages}
        </div>
    );
}

export default ChatMessages;
