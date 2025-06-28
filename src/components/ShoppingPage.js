import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ShoppingPage.css';
import 임영웅 from '../img/profile/임영웅.jpg.webp';
import 김호중 from '../img/profile/김호중.jpg';
import 영탁 from '../img/profile/영탁.jpeg';
import 이찬원 from '../img/profile/이찬원.jpg';
import 박지현 from '../img/profile/박지현.webp';


const ShoppingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 샘플 아티스트 데이터
  const artistData = {
    1: { 
      name: '임영웅', 
      image: `${임영웅}`,
      products: [
        { id: 1, name: '임영웅 공식 포스터', price: '15,000원', image: 'ㅣㅣㅣ' },
        { id: 2, name: '임영웅 트로트 앨범 CD', price: '25,000원', image: 'https://via.placeholder.com/150x200/FF8E8E/white?text=CD' },
        { id: 3, name: '임영웅 팬클럽 키트', price: '35,000원', image: 'https://via.placeholder.com/150x200/FFB3B3/white?text=KIT' },
        { id: 4, name: '임영웅 티셔츠', price: '45,000원', image: 'https://via.placeholder.com/150x200/FFD8D8/white?text=TSHIRT' },
      ]
    },
    2: { 
      name: '김호중', 
      image: `${김호중}`,
      products: [
        { id: 1, name: '김호중 공식 포스터', price: '15,000원', image: 'https://via.placeholder.com/150x200/4ECDC4/white?text=POSTER' },
        { id: 2, name: '김호중 트로트 앨범 CD', price: '25,000원', image: 'https://via.placeholder.com/150x200/6EE7DF/white?text=CD' },
        { id: 3, name: '김호중 응원봉', price: '35,000원', image: 'https://via.placeholder.com/150x200/8EF1E9/white?text=KIT' },
        { id: 4, name: '김호중 트로트 티셔츠', price: '45,000원', image: 'https://via.placeholder.com/150x200/AEFBF3/white?text=TSHIRT' },
      ]
    },
    3: { 
      name: '박지현', 
      image: `${박지현}`,
      products: [
        { id: 1, name: '박지현 공식 포스터', price: '15,000원', image: 'https://www.100ssd.co.kr/news/photo/202501/117470_97016_2735.jpg' },
        { id: 2, name: '박지현 트로트 앨범 CD', price: '25,000원', image: 'https://media.nudge-community.com/8161854' },
        { id: 3, name: '박지현 응원봉', price: '35,000원', image: 'https://topstarmall.net/web/product/big/202501/b61af276f8d1c241afdf05e7cfbe3dba.png' },
        { id: 4, name: '박지현 티셔츠', price: '45,000원', image: 'https://topstarmall.net/web/product/medium/202504/4c505d80de5d67b4d7387191d4c1d554.png' },
      ]
    },
    4: { 
      name: '영탁', 
      image: `${영탁}`,
      products: [
        { id: 1, name: '영탁 공식 포스터', price: '15,000원', image: 'https://via.placeholder.com/150x200/96CEB4/white?text=POSTER' },
        { id: 2, name: '영탁 트로트 앨범 CD', price: '25,000원', image: 'https://via.placeholder.com/150x200/B8E0C6/white?text=CD' },
        { id: 3, name: '영탁 응원봉', price: '35,000원', image: 'https://via.placeholder.com/150x200/DAF2D8/white?text=KIT' },
        { id: 4, name: '영탁 티셔츠', price: '45,000원', image: 'https://via.placeholder.com/150x200/FCF4EA/white?text=TSHIRT' },
      ]
    },
    5: { 
      name: '이찬원', 
      image: `${이찬원}`,
      products: [
        { id: 1, name: '이찬원 공식 포스터', price: '15,000원', image: 'https://via.placeholder.com/150x200/FFA726/white?text=POSTER' },
        { id: 2, name: '이찬원 트로트 앨범 CD', price: '25,000원', image: 'https://via.placeholder.com/150x200/FFB74D/white?text=CD' },
        { id: 3, name: '이찬원 응원봉', price: '35,000원', image: 'https://via.placeholder.com/150x200/FFCC80/white?text=KIT' },
        { id: 4, name: '이찬원 티셔츠', price: '45,000원', image: 'https://via.placeholder.com/150x200/FFE0B2/white?text=TSHIRT' },
      ]
    },
  };

  const artist = artistData[id] || { 
    name: 'Unknown Artist', 
    image: 'https://via.placeholder.com/300x400/999/white?text=Unknown\nPOSTER',
    products: []
  };

  const handleBackClick = () => {
    navigate(`/artist/${id}`);
  };

  const handleBuyClick = (productId) => {
    alert(`${artist.name}의 ${artist.products.find(p => p.id === productId)?.name}을 구매하시겠습니까?`);
  };

  return (
    <div className="shopping-page">
      <div className="shopping-header">
        <button className="back-button" onClick={handleBackClick}>
          ← 뒤로가기
        </button>
        <h1 className="shopping-title">쇼핑</h1>
      </div>

      <div className="shopping-content">
        <div className="poster-section">
          <img src={artist.image} alt={`${artist.name} 포스터`} className="artist-poster" />
          <h2 className="poster-title">{artist.name} </h2>
        </div>

        <div className="products-section">
          <h2 className="products-title">공식 굿즈</h2>
          <div className="products-grid">
            {artist.products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                  <button 
                    className="buy-button"
                    onClick={() => handleBuyClick(product.id)}
                  >
                    구매하기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage; 