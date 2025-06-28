import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ChatPage.css';

const ChatPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  // 샘플 아티스트 데이터
  const artistData = {
    1: { name: 'BTS', image: 'https://via.placeholder.com/50x50/FF6B6B/white?text=BTS' },
    2: { name: 'BLACKPINK', image: 'https://via.placeholder.com/50x50/4ECDC4/white?text=BP' },
    3: { name: 'TWICE', image: 'https://via.placeholder.com/50x50/45B7D1/white?text=TWICE' },
    4: { name: 'IU', image: 'https://via.placeholder.com/50x50/96CEB4/white?text=IU' },
  };

  const artist = artistData[id] || { name: 'Unknown Artist', image: 'https://via.placeholder.com/50x50/999/white?text=Unknown' };

  // 샘플 초기 메시지
  const initialMessages = [
    { id: 1, text: '안녕하세요! 팬 여러분들 반갑습니다! 😊', sender: 'artist', timestamp: '10:00' },
    { id: 2, text: '안녕하세요! 오늘도 좋은 하루 되세요!', sender: 'user', timestamp: '10:01' },
    { id: 3, text: '새 앨범 준비 중이에요. 기대해주세요!', sender: 'artist', timestamp: '10:02' },
    { id: 4, text: '정말 기대됩니다! 언제 나오나요?', sender: 'user', timestamp: '10:03' },
  ];

  useEffect(() => {
    setMessages(initialMessages);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBackClick = () => {
    navigate(`/artist/${id}`);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, message]);
      setNewMessage('');

      // 아티스트 응답 시뮬레이션
      setTimeout(() => {
        const artistResponse = {
          id: messages.length + 2,
          text: '메시지 감사합니다! 곧 답장드릴게요! 💕',
          sender: 'artist',
          timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, artistResponse]);
      }, 1000);
    }
  };

  return (
    <div className="chat-page">
      <div className="chat-header">
        <button className="back-button" onClick={handleBackClick}>
          ← 뒤로가기
        </button>
        <div className="chat-title">
          <img src={artist.image} alt={artist.name} className="artist-avatar" />
          <h1>{artist.name}와의 채팅</h1>
        </div>
      </div>

      <div className="chat-container">
        <div className="messages-container">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.sender === 'user' ? 'user-message' : 'artist-message'}`}
            >
              <div className="message-content">
                <p className="message-text">{message.text}</p>
                <span className="message-time">{message.timestamp}</span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form className="message-input-form" onSubmit={handleSendMessage}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="메시지를 입력하세요..."
            className="message-input"
          />
          <button type="submit" className="send-button">
            전송
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage; 