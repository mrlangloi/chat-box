import React from 'react';

//this component is to display a history of messages forwarded and received

function ChatMessages(props) {

    const messages = props.messages;

    console.log(messages);

    // const displayMessages = messages.length === 0 ? "" : messages.text.map((message, index) => (
    //     <p>{message.text}<br /></p>
    // ));
    messages.forEach( (index) => {
        // <div key={`message-${uuid()}`} className="chat-message">
        //     <span className="timestamp">{messages.timestamp}</span>
        // </div>
        index.text.map( (message) => {
            <p>{message}</p>
        });
    });

    const displayMessages = messages.length === 0 ? "" : messages.forEach( (index) => {
        // <div key={`message-${uuid()}`} className="chat-message">
        //     <span className="timestamp">{messages.timestamp}</span>
        // </div>
        index.text.map( (message) => {
            <p>{message}</p>
        });
    });

    return (
        <div className="chat-messages">
            {displayMessages}
        </div>
    );
}

export default ChatMessages;
