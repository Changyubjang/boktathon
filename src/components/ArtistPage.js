import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ArtistPage.css';

const ArtistPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 샘플 아티스트 데이터
  const artistData = {
    1: { name: '임영웅', image: 'https://via.placeholder.com/300x300/FF6B6B/white?text=임영웅' },
    2: { name: '김호중', image: 'https://via.placeholder.com/300x300/4ECDC4/white?text=김호중' },
    3: { name: '박지현', image: 'https://via.placeholder.com/300x300/45B7D1/white?text=박지현' },
    4: { name: '형탁', image: 'https://via.placeholder.com/300x300/96CEB4/white?text=형탁' },
    5: { name: '이찬원', image: 'https://via.placeholder.com/300x300/FFA726/white?text=이찬원' },
  };

  const artist = artistData[id] || { name: 'Unknown Artist', image: 'https://via.placeholder.com/300x300/999/white?text=Unknown' };

  const handleBackClick = () => {
    navigate('/');
  };

  const handleScheduleClick = () => {
    navigate(`/artist/${id}/schedule`);
  };

  const handleChatClick = () => {
    navigate(`/artist/${id}/chat`);
  };

  const handleShoppingClick = () => {
    navigate(`/artist/${id}/shopping`);
  };

  return (
    <div className="artist-page">
      <div className="artist-header">
        <button className="back-button" onClick={handleBackClick}>
          ← 뒤로가기
        </button>
        <h1 className="artist-title">{artist.name}</h1>
      </div>

      <div className="artist-content">
        <div className="artist-image-container">
          <img src={artist.image} alt={artist.name} className="artist-main-image" />
        </div>

        <div className="action-buttons">
          <button className="action-button schedule-btn" onClick={handleScheduleClick}>
            📅 일정
          </button>
          <button className="action-button chat-btn" onClick={handleChatClick}>
            💬 채팅
          </button>
          <button className="action-button shopping-btn" onClick={handleShoppingClick}>
            🛍️ 쇼핑
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistPage; 