import ChatMessages from './ChatMessages';

//this component is a barebones chat window

function ChatWindow(props) {

    return (
        <div className="chat-window">
            <ChatMessages messages={props.messages} />
        </div>
    );
}

export default ChatWindow;
