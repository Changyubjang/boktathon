


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SchedulePage.css';
import 임영웅 from '../img/profile/임영웅.jpg.webp';
import 김호중 from '../img/profile/김호중.jpg';
import 영탁 from '../img/profile/영탁.jpeg';
import 이찬원 from '../img/profile/이찬원.jpg';
import 박지현 from '../img/profile/박지현.webp';

const SchedulePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [memo, setMemo] = useState(''); // For storing the memo
  const [savedMemo, setSavedMemo] = useState(''); // To store and display the saved memo
  const [scheduleData, setScheduleData] = useState(null); // Store the fetched schedule data
  const [schedule, setSchedule] = useState(null); // State for the schedule

  // 샘플 아티스트 데이터
  const artistData = {
    1: { name: '임영웅', image: `${임영웅}` },
    2: { name: '김호중', image: `${김호중}` },
    3: { name: '박지현', image: `${박지현}` },
    4: { name: '형탁', image: `${영탁}` },
    5: { name: '이찬원', image: `${이찬원}` },
  };

  const data1 ={
    "success": true,
    "code": 200,
    "message": "일정 및 메모 조회 성공",
    "data": {
      "artist": "임영웅",
      "date": "2024-12-15",
      "schedule": "서울 KSPO DOME 콘서트",
      "memo": {
        "id": 7,
        "username": "지윤",
        "description": "이ㅏㅣ리ㅏ뤼ㅏ리라ㅜ"
      }
    }
  }

  const artist = artistData[id] || { name: 'Unknown Artist', image: 'https://via.placeholder.com/200x200/999/white?text=Unknown' };

  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  const getCurrentMonthDates = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const dates = [];

    // 이전 달의 마지막 날들
    for (let i = 0; i < firstDay.getDay(); i++) {
      dates.push(null);
    }

    // 현재 달의 날들
    for (let i = 1; i <= lastDay.getDate(); i++) {
      dates.push(new Date(year, month, i));
    }

    return dates;
  };

  const handleDateClick = async (date) => {
    if (date) {
      setSelectedDate(date);

      // API 호출 (GET 요청)
      try {
        const response = await fetch('https://your-api-endpoint.com', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(selectedDate.toLocaleDateString('ko-KR')), // JSON 데이터로 변환하여 전송
        });

        const data = await response.json();

        if (response.ok) {
          setScheduleData(data); // 업데이트된 일정 데이터 저장
          const schedule1 = data.meals[0].strMeal;
          const memo1 = data.meals[0].strInstructions;
          console.log(schedule1);
          console.log(memo1);

          setSchedule(data1.data.schedule); // 상태 업데이트
          setSavedMemo(data1.data.memo.description); // 상태 업데이트 (description을 savedMemo에 설정)
          console.log(data1.data.schedule); // 로그로 확인
        } else {
          alert('일정 데이터를 가져오는 데 실패했습니다.');
        }
      } catch (error) {
        alert('API 호출 중 오류가 발생했습니다.');
      }
    }
  };

  const handleBackClick = () => {
    navigate(`/artist/${id}`);
  };

  const handleMemoInputChange = (e) => {
    setMemo(e.target.value);
  };
  // const formattedDate = formatDate(selectedDate);


const handleSaveMemo = async (e) => {
  e.preventDefault();

  console.log(selectedDate.toLocaleDateString('ko-KR'));

  // selectedDate를 문자열 형식으로 변환 (YYYY-MM-DD 형식)
  
  // 메모를 description으로 설정하여 요청 데이터 준비
  const postData = {
    username: "지윤",
    date: selectedDate.toLocaleDateString('ko-KR'),
    artist: "임영웅",
    description: memo, // 입력한 메모를 description에 설정
  };

  try {
    // POST 요청을 보내는 코드
    const response = await fetch('https://your-api-endpoint.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData), // JSON 데이터로 변환하여 전송
    });

    if (response.ok) {
      alert('메모가 저장되었습니다.');

      // 메모 저장 후 화면에 바로 반영
      setSavedMemo(memo); // 메모 상태 업데이트
      setMemo(''); // 메모 입력 필드 초기화

      // 저장된 메모를 가져오기 위한 API 호출
      await handleDateClick(selectedDate); // 해당 날짜의 데이터를 다시 가져옴
    } else {
      alert('메모 저장에 실패했습니다.');
    }
  } catch (error) {
    alert('API 호출 중 오류가 발생했습니다.');
  }
};




  return (
    <div className="schedule-page">
      <div className="schedule-header">
        <button className="back-button" onClick={handleBackClick}>
          ← 뒤로가기
        </button>
        <h1 className="schedule-title">{artist.name} 일정</h1>
      </div>

      <div className="schedule-content">
        <div className="artist-info">
          <img src={artist.image} alt={artist.name} className="artist-image" />
          <h2 className="artist-name">{artist.name}</h2>
        </div>

        <div className="calendar-section">
          <div className="calendar">
            <div className="calendar-header">
              <h3>{selectedDate.getFullYear()}년 {selectedDate.getMonth() + 1}월</h3>
            </div>
            <div className="calendar-grid">
              <div className="calendar-days">
                <div>일</div>
                <div>월</div>
                <div>화</div>
                <div>수</div>
                <div>목</div>
                <div>금</div>
                <div>토</div>
              </div>
              <div className="calendar-dates">
                {getCurrentMonthDates().map((date, index) => (
                  <div
                    key={index}
                    className={`calendar-date ${date ? 'has-date' : 'empty'} ${
                      date && formatDate(date) === formatDate(selectedDate) ? 'selected' : ''
                    } ${date && scheduleData?.data?.schedule && formatDate(date) === formatDate(selectedDate) ? 'has-schedule' : ''}`}
                    onClick={() => handleDateClick(date)}
                  >
                    {date ? date.getDate() : ''}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="schedule-details">
            <h3>선택된 날짜: {selectedDate.toLocaleDateString('ko-KR')}</h3>
            {schedule ? (
              <div className="schedule-item">
                <div>{schedule}</div>
              </div>
            ) : (
              <p className="no-schedule">해당 날짜에 일정이 없습니다.</p>
            )}

            {/* Display the saved memo */}
            {savedMemo && (
              <div className="saved-memo">
                <h3>저장된 메모</h3>
                <p>{savedMemo}</p>
              </div>
            )}

            {/* Memo input form */}
            <form onSubmit={handleSaveMemo}>
              <textarea id = 'inputBox'
                value={memo}
                onChange={handleMemoInputChange}
                placeholder="메모를 입력하세요"
                required
              />
              <button id = 'saveBtn' type="submit">메모 저장</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;

