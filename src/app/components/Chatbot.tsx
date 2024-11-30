'use client'
import React, { useState } from 'react';
import axios from 'axios';

export default function Chatbot() {
  const [messages, setMessages] = useState<{ sender: string; text: string , link?: []}[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const refs = {
    "burningman": "https://chenshuz.substack.com/p/burning-man-stories-how-to-figure",
    "prison": "https://chenshuz.substack.com/p/life-as-a-repeated-prisoners-dilemma",
    "newyork": "https://chenshuz.substack.com/p/12-5-days-in-new-york-imagination",
    "sabbatical": "https://chenshuz.substack.com/p/13-no-i-didnt-travel-on-my-sabbatical",
    "love": "https://chenshuz.substack.com/p/the-art-of-loving"
  }

  const getRefs = (contexts:[]) => {
    const links: any[] = [];

     contexts.forEach((context, index) => {
      const link = refs[context];
      if (index < contexts.length - 1) {
        links.push(<a key={context} className="text-blue-500" href={link} target="_blank">[{context}], </a>)
      } else {
        links.push(<a key={context}  className="text-blue-500" href={link} target="_blank">[{context}]</a>)
      }
    })
    return links;
  }

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
      //const response = await axios.post('http://127.0.0.1:8000/chat', { query });
      let answer = ''
      let context = []
      console.log(response);
      answer = response.data.answer
      context = response.data.context
      
      console.log(`query: ${query} , answer: ${answer}`);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: answer , link: context},
      ]);
      setIsTyping(false);
    } catch (error) {
      console.error('Error sending message:', error);
      if (axios.isAxiosError(error) &&  error.status === 429) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: 'Too many requests...slow down' , link: []},
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: 'Sorry, internal server error' , link: []},
        ]);
      }
      setIsTyping(false);
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
              {msg.link && msg.link.length > 0 && <p>Refereces:</p>}
              {msg.link && getRefs(msg.link)}
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
