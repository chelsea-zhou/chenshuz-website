'use client'
import React, { useState } from 'react';
import axios from 'axios';

export default function Chatbot() {
  const [messages, setMessages] = useState<{ sender: string; text: string , link?: []}[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const query = input;
    setInput('');
    // Add user's message to the chat
    setMessages([...messages, { sender: 'user', text: query }]);
    setIsTyping(true);

    try {
      // Send message to backend API
      const response = await axios.post('https://chenshubot.vercel.app/chat', { query });
      console.log(response.data)
      const answer = response.data.answer
      const context = response.data.context
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: answer , link: context},
        //{ sender: 'bot', text: answer , link: []},
      ]);
      setIsTyping(false);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="flex flex-col  mt-10 p-4 pt-5 aspect-[3/2] overflow-auto rounded-lg shadow-lg bg-gray-100">
      <div
        className="flex flex-col space-y-2 p-5 aspect-[5/3] overflow-auto overflow-y-auto bg-white border rounded-lg"
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
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
      {isTyping ? <p className='flex mt-2 px-2 space-x-2'>ChenshuBot Typing ...</p> 
                : <p className='flex mt-2 space-x-2'></p>
      }
    </div>
  );
};
