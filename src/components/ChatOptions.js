import React from 'react';
import { v4 as uuid } from 'uuid';

//this component is for the user to choose an interactable option to communicate with chatgpt

//uuid is to create a unique key for each button in the options array

function ChatOptions(props) {

    const userOptions = props.userOptions;

    const userOptionsArray = userOptions.map((item) => {
        return (
            <button
                key={`userOption-${uuid()}`}
                onClick={props.handleSendMessage}
            >
                {item}
            </button>
        )
    });

    return (
        <div>
            {userOptionsArray}
        </div>
    );
}

export default ChatOptions;
