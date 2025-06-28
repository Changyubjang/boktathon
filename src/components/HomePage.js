import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import logo from '../img/logo.png';
import 임영웅 from '../img/profile/임영웅.jpg.webp';
import 김호중 from '../img/profile/김호중.jpg';
import 영탁 from '../img/profile/영탁.jpeg';
import 이찬원 from '../img/profile/이찬원.jpg';
import 박지현 from '../img/profile/박지현.webp';


const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // 샘플 찜한 아티스트 데이터
  const favoriteArtists = [
    { id: 1, name: '임영웅', image: `${임영웅}` },
    { id: 2, name: '김호중', image: `${김호중}` },
    { id: 3, name: '박지현', image: `${박지현}` },
    { id: 4, name: '영탁', image: `${영탁}` },
    { id: 5, name: '이찬원', image: `${이찬원}` },
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
        <img src = {logo} alt ="로고 이미지" width='200px'/>
        
        {/* <h1 className="main-title">트로트 아티스트 팬클럽</h1> */}
        
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
          <h2 className="favorites-title">아티스트</h2>
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