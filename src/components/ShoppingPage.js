import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ShoppingPage.css';

const ShoppingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 샘플 아티스트 데이터
  const artistData = {
    1: { 
      name: 'BTS', 
      image: 'https://via.placeholder.com/300x400/FF6B6B/white?text=BTS\nPOSTER',
      products: [
        { id: 1, name: 'BTS 공식 포스터', price: '15,000원', image: 'https://via.placeholder.com/150x200/FF6B6B/white?text=POSTER' },
        { id: 2, name: 'BTS 앨범 CD', price: '25,000원', image: 'https://via.placeholder.com/150x200/FF8E8E/white?text=CD' },
        { id: 3, name: 'BTS 팬클럽 키트', price: '35,000원', image: 'https://via.placeholder.com/150x200/FFB3B3/white?text=KIT' },
        { id: 4, name: 'BTS 티셔츠', price: '45,000원', image: 'https://via.placeholder.com/150x200/FFD8D8/white?text=TSHIRT' },
      ]
    },
    2: { 
      name: 'BLACKPINK', 
      image: 'https://via.placeholder.com/300x400/4ECDC4/white?text=BLACKPINK\nPOSTER',
      products: [
        { id: 1, name: 'BLACKPINK 공식 포스터', price: '15,000원', image: 'https://via.placeholder.com/150x200/4ECDC4/white?text=POSTER' },
        { id: 2, name: 'BLACKPINK 앨범 CD', price: '25,000원', image: 'https://via.placeholder.com/150x200/6EE7DF/white?text=CD' },
        { id: 3, name: 'BLACKPINK 팬클럽 키트', price: '35,000원', image: 'https://via.placeholder.com/150x200/8EF1E9/white?text=KIT' },
        { id: 4, name: 'BLACKPINK 티셔츠', price: '45,000원', image: 'https://via.placeholder.com/150x200/AEFBF3/white?text=TSHIRT' },
      ]
    },
    3: { 
      name: 'TWICE', 
      image: 'https://via.placeholder.com/300x400/45B7D1/white?text=TWICE\nPOSTER',
      products: [
        { id: 1, name: 'TWICE 공식 포스터', price: '15,000원', image: 'https://via.placeholder.com/150x200/45B7D1/white?text=POSTER' },
        { id: 2, name: 'TWICE 앨범 CD', price: '25,000원', image: 'https://via.placeholder.com/150x200/67C9E0/white?text=CD' },
        { id: 3, name: 'TWICE 팬클럽 키트', price: '35,000원', image: 'https://via.placeholder.com/150x200/89DBEF/white?text=KIT' },
        { id: 4, name: 'TWICE 티셔츠', price: '45,000원', image: 'https://via.placeholder.com/150x200/ABEDFE/white?text=TSHIRT' },
      ]
    },
    4: { 
      name: 'IU', 
      image: 'https://via.placeholder.com/300x400/96CEB4/white?text=IU\nPOSTER',
      products: [
        { id: 1, name: 'IU 공식 포스터', price: '15,000원', image: 'https://via.placeholder.com/150x200/96CEB4/white?text=POSTER' },
        { id: 2, name: 'IU 앨범 CD', price: '25,000원', image: 'https://via.placeholder.com/150x200/B8E0C6/white?text=CD' },
        { id: 3, name: 'IU 팬클럽 키트', price: '35,000원', image: 'https://via.placeholder.com/150x200/DAF2D8/white?text=KIT' },
        { id: 4, name: 'IU 티셔츠', price: '45,000원', image: 'https://via.placeholder.com/150x200/FCF4EA/white?text=TSHIRT' },
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
        <h1 className="shopping-title">{artist.name} 쇼핑</h1>
      </div>

      <div className="shopping-content">
        <div className="poster-section">
          <img src={artist.image} alt={`${artist.name} 포스터`} className="artist-poster" />
          <h2 className="poster-title">{artist.name} 공식 포스터</h2>
        </div>

        <div className="products-section">
          <h2 className="products-title">제품 정보</h2>
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