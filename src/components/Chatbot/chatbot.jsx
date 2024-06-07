import React, { useState, useEffect } from 'react';
import './chatbot.css'; 
import { getResponse } from './backend'; 

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    if (isOpen) {
      addBotMessage("Hi there! How can I assist you today?");
    }
  }, [isOpen]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { sender: 'user', text: input };
      setMessages([...messages, userMessage]);

      try {
        const response = await getResponse(input);
        const botMessage = { sender: 'bot', text: response };
        setMessages([...messages, userMessage, botMessage]); 
      } catch (error) {
        console.error('Error sending message:', error);
        const errorMessage = { sender: 'bot', text: 'Error: Could not send message.' };
        setMessages([...messages, userMessage, errorMessage]); 
      }
      setInput('');
    }
  };

  const handleRefresh = () => {
    setMessages([{ sender: 'bot', text: "Hi there! How can I assist you today?" }]); // Set initial bot message
    setInput(''); 
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const addBotMessage = (message) => {
    setMessages([...messages, { sender: 'bot', text: message }]);
  };

  return (
    <div>
      <div className="chat-icon-container" onClick={toggleChatbot}>
        <div className="chat-icon">
          <i className="fas fa-user-astronaut"></i>
        </div>
      </div>
      {isOpen && (
        <div className="chat-popup-container">
          <div className="chat-popup-header">
            <h5>SpaceBot</h5>
            <i className="fas fa-sync refresh-icon" onClick={handleRefresh}></i>
            <i className="fas fa-times close-icon" onClick={toggleChatbot}></i>
          </div>
          <div className="chat-popup-body">
            <div className="chat-messages">
              {messages.map((message, index) => (
                <div key={index} className={`chat-message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                  {message.sender === 'bot' && <i className="fas fa-user-astronaut"></i>}
                  <p dangerouslySetInnerHTML={{ __html: message.text }}></p>
                </div>
              ))}
            </div>
          </div>
          <div className="chat-popup-footer">
            <input
              type="text"
              className="chat-popup-input"
              placeholder="Type your message..."
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown} // Add the keydown event listener here
            />
            <button className="chat-popup-send" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
