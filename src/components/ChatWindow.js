import axios from 'axios';
import { useEffect, useState } from 'react';
import ChatMessages from './ChatMessages';
import ChatOptions from './ChatOptions';

//this component is a barebones chat window

//i need to find a way to render each line separately so it's not just a huge wall of text w/o spacing

function ChatWindow(props) {

    const API_URL = process.env.REACT_APP_API_URL;
    const API_KEY = process.env.REACT_APP_API_KEY;

    const character = props.character;

    const [messages, setMessages] = useState([]);
    const [userOptions, setOptions] = useState([]);

    const [request, setRequest] = useState('');



    //testing options
    useEffect( () => {
        setOptions(["asdf", "123", "test", "1234", "testing", "Hello chatgpt!"]);
    }, []);

    //display message(s) onto the window
    const displayMessage = (message) => {
        const textMsg = `${message}`;        
        const newMessage = {
            text: `${textMsg}`,
            timestamp: new Date().toLocaleTimeString(),
        };

        setMessages((currentMessages) => [...currentMessages, newMessage]);
    };

    //this function communicates with chatgpt via axios
    const sendMessage = async () => {
        try {
            const response = await axios.post(API_URL, {
                    model: 'gpt-3.5-turbo',
                    // messages: [
                    //     { role: 'system', content: 'You are a helpful assistant.' },
                    //     { role: 'user', content: request },
                    // ],
                    messages: [
                        { role: 'system', content: 'You are a helpful assistant.' },
                        { role: 'user', content: `I want a you to start me a short RPG scenario where I am a ${character.myRace} ${character.myClass} under the name ${character.myName}. I just need a character lore and a current rpg situation, no choices nor outcomes. Do not respond with "Sure!" or anything that depicts AI-language.` },
                    ],
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${API_KEY}`,
                    },
                }
            );

            console.log(response);
            
            displayMessage(response.data.choices[0].message.content);

        } catch (error) {
            console.error(error);
        }
    };

    const handleSendMessage = (e) => {
        e.preventDefault();

        console.log("submitted");
        const inputText = e.target.innerText;

        //connect to chatgpt here
        setRequest(inputText);
        sendMessage();
        displayMessage(inputText);
    }

    return (
        <div className="chat-window">
            <ChatMessages messages={messages} />

            <ChatOptions userOptions={userOptions} handleSendMessage={handleSendMessage} />

        </div>
    );
}

export default ChatWindow;
