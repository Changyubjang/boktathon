import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // 샘플 찜한 아티스트 데이터
  const favoriteArtists = [
    { id: 1, name: '임영웅', image: 'https://via.placeholder.com/100x100/FF6B6B/white?text=임영웅' },
    { id: 2, name: '김호중', image: 'https://via.placeholder.com/100x100/4ECDC4/white?text=김호중' },
    { id: 3, name: '박지현', image: 'https://via.placeholder.com/100x100/45B7D1/white?text=박지현' },
    { id: 4, name: '형탁', image: 'https://via.placeholder.com/100x100/96CEB4/white?text=형탁' },
    { id: 5, name: '이찬원', image: 'https://via.placeholder.com/100x100/FFA726/white?text=이찬원' },
  ];

  const handleArtistClick = (artistId) => {
    navigate(`/artist/${artistId}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // 검색 기능 구현 (현재는 콘솔에만 출력)
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="home-page">
      <div className="home-container">
        <h1 className="main-title">트로트 아티스트 팬클럽</h1>
        
        <div className="search-section">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="트로트 아티스트를 검색해보세요..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              검색
            </button>
          </form>
        </div>

        <div className="favorites-section">
          <h2 className="favorites-title">내가 찜한 트로트 아티스트</h2>
          <div className="artists-grid">
            {favoriteArtists.map((artist) => (
              <div
                key={artist.id}
                className="artist-card"
                onClick={() => handleArtistClick(artist.id)}
              >
                <img src={artist.image} alt={artist.name} className="artist-image" />
                <h3 className="artist-name">{artist.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 