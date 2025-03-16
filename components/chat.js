import React, { useState } from 'react';

const Chat = ({ productId, userId }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (!message) return;

    const newMessage = {
      userId,
      productId,
      message,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <div className="chat">
      <h3>Secure Chat</h3>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className="chat-message">
            <p>{msg.message}</p>
            <span>{new Date(msg.timestamp).toLocaleTimeString()}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
