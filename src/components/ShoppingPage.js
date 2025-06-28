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
        { id: 1, name: '임영웅 공식 포스터', price: '15,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MjlfMTI5%2FMDAxNzI0ODY0MDIwNzc4.T-b4OkbmcyH-df9ad9pbvMP_6K-LwGDBKP-ed4fcJ90g.WpvkRDY3dAHdoufLXMHVcLgtmtS2tGkbXgdeBi5wG5Ug.JPEG%2FIMG_3020.jpg&type=a340' },
        { id: 2, name: '임영웅 트로트 앨범 CD', price: '25,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F421%2F2022%2F04%2F19%2F0006037088_001_20220419090301660.jpg&type=a340' },
        { id: 3, name: '임영웅 응원봉', price: '35,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MDJfMTc3%2FMDAxNzIyNTQ4NzU4MDM2.MzgfCRo89FZ-vhaIKsDO4mj8FLQdm9Kf7fP5Mienokog.HFWNyRqpzZHpARlf95GkkfId_3EnoSRHtZowF1m1A04g.PNG%2Fimage.png&type=a340' },
        { id: 4, name: '임영웅 티셔츠', price: '45,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20230921_106%2F1695277151935Y0XR9_JPEG%2F13580583759041592_467270312.jpg&type=a340' },
      ]
    },
    2: { 
      name: '김호중', 
      image: `${김호중}`,
      products: [
        { id: 1, name: '김호중 공식 포스터', price: '15,000원', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_oYLZjkNi2tMes3R6a1iNaX-YFZB_Jth7Ng&s' },
        { id: 2, name: '김호중 트로트 앨범 CD', price: '25,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MjFfMTM4%2FMDAxNjI5NTIxMTA5NTE0.edJuXxkuhHsXfsBZVov4MiACWJofua5iEn-wQ2CwgpUg.HOe1euey7zDuCCV5VXNv2bnGGYiTamxZI5u2Kf6bFHcg.JPEG.jangha0806%2FScreenshot%25A3%25DF20210821%25A3%25AD122103%25A3%25DFNAVER.jpg&type=a340' },
        { id: 3, name: '김호중 응원봉', price: '35,000원', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlLqTIwhmYmbwKiw-sA5nBJPBU4QSZ-g34Bw&s' },
        { id: 4, name: '김호중 티셔츠', price: '45,000원', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoMGWMAXwccB08OcYujvZgv3tsVb_XvraFVg&s' },
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
        { id: 1, name: '영탁 공식 포스터', price: '15,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MjFfMjEy%2FMDAxNjU1ODE5ODEzMDY0.s51FNR67fYNe2MCuT2pM3RjJJpvS7qRQbmUkI_CnW9Mg.WGzdfZYeHq9cyotVBNEcXOkhXd6W3atU9d-Qs2KgO8og.JPEG.dhsmfdntwk2020%2F%25C5%25B9%25BC%25EE%25C6%25F7%25BD%25BA%25C5%25CD.jpg&type=a340' },
        { id: 2, name: '영탁 트로트 앨범 CD', price: '25,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MDRfMjM2%2FMDAxNjkzNzk3MDYzMDE3.OZ6HDuNIEEmmRNuhts2c8DW-Rnveec9A1cKrHCWW-kkg.ZKC8Ao2NiaL8-atiJY3jpBdeMmWwc19GcJS-csjf4K4g.JPEG.hee2318%2FScreenshot%25A3%25DF20230904%25A3%25DF120552%25A3%25DFKakaoTalk.jpg&type=a340' },
        { id: 3, name: '영탁 응원봉', price: '35,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MTZfMjMy%2FMDAxNjkyMTczNjk3NjYx.tulYAqSt71Duk8FwenQhYbVwB6rHnq78MJc4It70KXQg.5FkewuWJWJFwX5X6-PjZ99CJdbD7oPD5I7SExk0WCGMg.JPEG.hyetak2%2F20230816%25A3%25DF170549.jpg&type=a340' },
        { id: 4, name: '영탁 티셔츠', price: '45,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210701_62%2F1625108105011dEa4U_JPEG%2F26244003718662662_1678300791.jpg&type=a340' },
      ]
    },
    5: { 
      name: '이찬원', 
      image: `${이찬원}`,
      products: [
        { id: 1, name: '이찬원 공식 포스터', price: '15,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MjRfMTg4%2FMDAxNjMyNDgyOTc3NTg4.JmVqsxKrmyRJ2RxFDtEa9bNdR1OaLA9wkZ08-FPNZQAg.8FWVMZQPTWNy_6m7VhweGB3p4jzwgf5lddCTCG3MzOQg.JPEG.dotorymin0910%2F%25C0%25CC%25C2%25F9%25BF%25F8%25A3%25DF%25C4%25DC%25BC%25AD%25C6%25AE%25A3%25DF%25C4%25AB%25C6%25E4%25A3%25DF%25B0%25F8%25C1%25F6%25A3%25DF%25C3%25D6%25C1%25BE.jpg&type=a340' },
        { id: 2, name: '이찬원 트로트 앨범 CD', price: '25,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMjJfODEg%2FMDAxNjk3OTQyOTk5MzU2.a6u6m-zfTpHm1oyMTaaOTIyTeQ36BaF69Wmj6ebyLJcg.wVbhUBnP5fIeUwtwaHXCMq9t7aIYlZu60r8fe8N1fPAg.JPEG.whdmsgml235%2F1697942936073.jpg&type=a340' },
        { id: 3, name: '이찬원 응원봉', price: '35,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20240510_227%2F1715310604854thbB2_PNG%2F42613288734406462_1138341572.png&type=a340' },
        { id: 4, name: '이찬원 티셔츠', price: '45,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20240528_37%2F1716906905187zt60p_JPEG%2F118042803885339378_439756402.jpg&type=a340' },
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