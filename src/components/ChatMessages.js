import React from 'react';
import { v4 as uuid } from 'uuid';

//this component is to display a history of messages forwarded and received

function ChatMessages(props) {

    const messages = props.messages;

    console.log(messages);

    const displayMessages = messages.length === 0 ? "" : messages.map((message, index) => (
        <div key={`message-${uuid()}`} className="chat-message">
            <span className="timestamp">{message.timestamp}</span>
            <pre>{message.text}</pre>
        </div>
    ));

    return (
        <div className="chat-messages">
            {displayMessages}
        </div>
    );
}

export default ChatMessages;
