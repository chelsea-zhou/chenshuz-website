'use client'
import React, { useState } from 'react';
import axios from 'axios';

export default function Chatbot() {
  const [messages, setMessages] = useState<{ sender: string; text: string , link?: []}[]>([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user's message to the chat
    setMessages([...messages, { sender: 'user', text: input }]);

    try {
      // Send message to backend API
      const response = await axios.post('http://127.0.0.1:8000/chat', { query: input });
      // const response = {
      //   data: {
      //     answer: "Chenshu, a prominent figure in various fields, may not have a widely recognized or documented life philosophy that is universally acknowledged. If you are referring to a specific individual named Chenshu, please provide more context or details about their background or contributions. This will help me give you a more accurate and relevant response regarding their life philosophy or beliefs.",
      //   }
      // }
      console.log(response.data)
      // Add bot's response to the chat
      const answer = response.data.answer
      const context = response.data.context
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: answer , link: context},
        //{ sender: 'bot', text: answer , link: []},

      ]);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    // Clear input field
    setInput('');
  };

  return (
    <div className="flex flex-col  mt-10 p-4 pt-5 border-2 rounded-lg shadow-lg bg-gray-100">
      <div
        className="flex flex-col space-y-2 p-5 h-128 overflow-y-auto bg-white border rounded-lg"
        id="chat-window"
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`${
                msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
              } px-4 py-2 rounded-lg`}
            >
              <p>{msg.text}</p>
              {msg.link && <p>Refereces:</p>}
              {msg.link && <p className='underline text-blue'>{Array.from(msg.link).join(", ")}</p>}
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-4 space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow px-4 py-2 border rounded-lg focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};
