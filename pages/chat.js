import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchMessages, sendMessage } from '../utils/chat'; // Fonction utilitaire pour gérer les messages

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const getMessages = async () => {
      const messagesData = await fetchMessages();
      setMessages(messagesData);
    };

    getMessages();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage) {
      await sendMessage(newMessage);
      setNewMessage('');
      const updatedMessages = await fetchMessages();
      setMessages(updatedMessages);
    }
  };

  return (
    <div>
      <Navbar />
      <main>
        <section className="chat">
          <h1>Chat</h1>
          <div className="messages">
            {messages.map((message, index) => (
              <div key={index} className="message">
                <p>{message.sender}: {message.text}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage}>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message"
            />
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}