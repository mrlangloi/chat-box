import axios from 'axios';
import { useEffect, useState } from 'react';
import ChatMessages from './ChatMessages';
import ChatOptions from './ChatOptions';

//this component is a barebones chat window

//i got the api connected, now i need to set up proper user prompts and chatgpt responses

function ChatWindow() {

    const API_URL = process.env.REACT_APP_API_URL;
    const API_KEY = process.env.REACT_APP_API_KEY;

    const [messages, setMessages] = useState([]);
    const [userOptions, setOptions] = useState([]);

    const [request, setRequest] = useState('');
    const [response, setResponse] = useState('');

    //testing options
    useEffect( () => {
        setOptions(["asdf", "123", "test", "1234", "testing", "Hello chatgpt!"]);
    }, []);

    //this function communicates with chatgpt via axios
    const sendMessage = async () => {
        try {
            const response = await axios.post(API_URL, {
                    model: 'gpt-3.5-turbo', // Your desired model
                    messages: [
                        { role: 'system', content: 'You are a helpful assistant.' },
                        { role: 'user', content: request },
                    ],
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${API_KEY}`,
                    },
                }
            );
    
            setResponse(response.data.choices[0].message.content);
        } catch (error) {
            // Handle error
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

        console.log(response);

        //display message(s) onto the window
        if (inputText.trim() !== '') {
            const newMessage = {
                text: inputText,
                timestamp: new Date().toLocaleTimeString(),
            };

            setMessages((currentMessages) => [...currentMessages, newMessage]);

            console.log(messages);
        }
    }

    return (
        <div className="chat-window">
            <ChatMessages messages={messages} />

            <ChatOptions userOptions={userOptions} handleSendMessage={handleSendMessage} />

        </div>
    );
}

export default ChatWindow;
