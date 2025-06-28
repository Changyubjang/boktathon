import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ArtistPage.css';

const ArtistPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 샘플 아티스트 데이터
  const artistData = {
    1: { name: 'BTS', image: 'https://via.placeholder.com/300x300/FF6B6B/white?text=BTS' },
    2: { name: 'BLACKPINK', image: 'https://via.placeholder.com/300x300/4ECDC4/white?text=BLACKPINK' },
    3: { name: 'TWICE', image: 'https://via.placeholder.com/300x300/45B7D1/white?text=TWICE' },
    4: { name: 'IU', image: 'https://via.placeholder.com/300x300/96CEB4/white?text=IU' },
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