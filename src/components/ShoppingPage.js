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
        { id: 1, name: '임영웅 공식 포스터', price: '15,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMjhfMTg2%2FMDAxNjY2OTE5MDI3MDA4.gDu5Ae3wEsKwiKCOmZL9UwlV8rTDVncuE2EqKagn1sQg.HC6w1eCFC-pI69Hw3SuNqlKryvot4deAWTP1_MsB25Mg.JPEG.loo7939%2F1666913926.jpg&type=a340' },
        { id: 2, name: '임영웅 트로트 앨범 CD', price: '25,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20221020_115%2F1666249427922tvilM_JPEG%2F67385273644266019_796882439.jpg&type=a340' },
        { id: 3, name: '임영웅 팬클럽 키트', price: '35,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MDJfMTc3%2FMDAxNzIyNTQ4NzU4MDM2.MzgfCRo89FZ-vhaIKsDO4mj8FLQdm9Kf7fP5Mienokog.HFWNyRqpzZHpARlf95GkkfId_3EnoSRHtZowF1m1A04g.PNG%2Fimage.png&type=a340' },
        { id: 4, name: '임영웅 티셔츠', price: '45,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshopping.phinf.naver.net%2Fmain_5170667%2F51706677825.20241202010646.jpg&type=a340' },
      ]
    },
    2: { 
      name: '김호중', 
      image: `${김호중}`,
      products: [
        { id: 1, name: '김호중 공식 포스터', price: '15,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MDlfMTA2%2FMDAxNTk5NjE3ODY4ODAx.27-a2zEZoUQPg9nPFqHzZLWJNIlvPczrXyIdEw83v48g.IsaM9dNSe8i-MuEUK0L5fzrypF3C51liZRodb2y79vkg.JPEG.moviechart%2Funnamed.jpg&type=a340' },
        { id: 2, name: '김호중 트로트 앨범 CD', price: '25,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MjFfMTM4%2FMDAxNjI5NTIxMTA5NTE0.edJuXxkuhHsXfsBZVov4MiACWJofua5iEn-wQ2CwgpUg.HOe1euey7zDuCCV5VXNv2bnGGYiTamxZI5u2Kf6bFHcg.JPEG.jangha0806%2FScreenshot%25A3%25DF20210821%25A3%25AD122103%25A3%25DFNAVER.jpg&type=a340' },
        { id: 3, name: '김호중 응원봉', price: '35,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMTZfOCAg%2FMDAxNzM0MzUzMDk1NTU2.mXUJETMtd39_aYRj2bsEwwLMJGcJefxqTxv0bClOG4gg.cseInNifAu-cSybpFytmcuV5-YD9gX5hYMNQqeZo5gYg.PNG%2Fimage.png&type=a340' },
        { id: 4, name: '김호중 트로트 티셔츠', price: '45,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshopping.phinf.naver.net%2Fmain_4463448%2F44634484970.20231214050639.jpg&type=a340' },
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
        { id: 2, name: '영탁 트로트 앨범 CD', price: '25,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MDhfMjk2%2FMDAxNjU0NjE5NTM5OTcz.Cqi7NxuQTFV-vMcOp3VWCmE0Ra_eYcgnCkBRtVX1eMcg.lBIgZHNdSFE5RjCgjYgJOR44-R6c-ZlEfYtWOqqnkWYg.JPEG.jyoungr31%2FIMG%25A3%25DF20220607%25A3%25DF165458%25A3%25DF206.jpg&type=a340' },
        { id: 3, name: '영탁 응원봉', price: '35,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20230911_159%2F1694418305906Hp5yN_JPEG%2F7625704363011356_1441438732.jpg&type=a340' },
        { id: 4, name: '영탁 티셔츠', price: '45,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210701_62%2F1625108105011dEa4U_JPEG%2F26244003718662662_1678300791.jpg&type=a340' },
      ]
    },
    5: { 
      name: '이찬원', 
      image: `${이찬원}`,
      products: [
        { id: 1, name: '이찬원 공식 포스터', price: '15,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MjRfMTg4%2FMDAxNjMyNDgyOTc3NTg4.JmVqsxKrmyRJ2RxFDtEa9bNdR1OaLA9wkZ08-FPNZQAg.8FWVMZQPTWNy_6m7VhweGB3p4jzwgf5lddCTCG3MzOQg.JPEG.dotorymin0910%2F%25C0%25CC%25C2%25F9%25BF%25F8%25A3%25DF%25C4%25DC%25BC%25AD%25C6%25AE%25A3%25DF%25C4%25AB%25C6%25E4%25A3%25DF%25B0%25F8%25C1%25F6%25A3%25DF%25C3%25D6%25C1%25BE.jpg&type=a340' },
        { id: 2, name: '이찬원 트로트 앨범 CD', price: '25,000원', image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMjVfNzkg%2FMDAxNjc0NjMyMDI5Mzk0.6qEhdPYT3nD2ttHAcliTlxWb0wNjfxPYKj4bTfAVVzYg.EIPiNIgTqWkZvNQN_VkY2b8buPjE5Zp1WcGczJUzWWUg.JPEG.ruru300%2FScreenshot_2023-01-25_160915.jpg&type=a340' },
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