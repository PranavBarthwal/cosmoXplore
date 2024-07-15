import React, { useState, useEffect, useRef } from "react";
import "./chatbot.css";
import { getResponse } from "./backend";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatbotContainerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      addBotMessage("Hi there! How can I assist you today?");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        chatbotContainerRef.current &&
        !chatbotContainerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { sender: "user", text: input };
      setMessages([...messages, userMessage]);

      try {
        const response = await getResponse(input);
        const botMessage = { sender: "bot", text: response };
        setMessages([...messages, userMessage, botMessage]);
      } catch (error) {
        console.error("Error sending message:", error);
        const errorMessage = {
          sender: "bot",
          text: "Error: Could not send message.",
        };
        setMessages([...messages, userMessage, errorMessage]);
      }
      setInput("");
    }
  };

  const handleRefresh = () => {
    setMessages([
      { sender: "bot", text: "Hi there! How can I assist you today?" },
    ]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const addBotMessage = (message) => {
    setMessages([...messages, { sender: "bot", text: message }]);
  };

  return (
    <div>
      {!isOpen && (
        <div className="chat-icon-container" onClick={toggleChatbot}>
          <div className="chat-icon">
            <i className="fas fa-user-astronaut"></i>
          </div>
        </div>
      )}
      {isOpen && (
        <div className="chat-popup-container" ref={chatbotContainerRef}>
          <div className="chat-popup-header">
            <h5>SpaceBot</h5>
            <i
              style={{ marginTop: "1.5%" }}
              className="fas fa-sync refresh-icon"
              onClick={handleRefresh}
            ></i>
            <i
              style={{ marginTop: "5%" }}
              className="fas fa-times close-icon"
              onClick={toggleChatbot}
            ></i>
          </div>
          <div className="chat-popup-body">
            <div className="chat-messages">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`chat-message ${
                    message.sender === "user" ? "user-message" : "bot-message"
                  }`}
                >
                  {message.sender === "bot" && (
                    <i className="fas fa-user-astronaut"></i>
                  )}
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
              onKeyDown={handleKeyDown}
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
