import React, { useState } from 'react';
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
  const [schedule, setSchedule] = useState([]); // State for the schedule (list of schedules)
  
  // 샘플 아티스트 데이터
  const artistData = {
    1: { name: '임영웅', image: `${임영웅}` },
    2: { name: '김호중', image: `${김호중}` },
    3: { name: '박지현', image: `${박지현}` },
    4: { name: '영탁', image: `${영탁}` },
    5: { name: '이찬원', image: `${이찬원}` },
  };

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

  const getRandomSchedules = () => {
    const schedules = [
      "서울 KSPO DOME 콘서트",
      "전국 투어 공연",
      "팬미팅",
      "사인회",
      "특별 방송",
      "라이브 공연",
      "새 앨범 발표",
      "인터뷰",
    ];
    const randomSchedules = [];
    const numSchedules = Math.floor(Math.random() * 3) + 1; // Pick between 1 to 3 schedules

    for (let i = 0; i < numSchedules; i++) {
      const randomIndex = Math.floor(Math.random() * schedules.length);
      randomSchedules.push(schedules[randomIndex]);
    }
    return randomSchedules;
  };

  const handleDateClick = (date) => {
    if (date) {
      setSelectedDate(date);
      const formattedDate = formatDate(date);
      
      // Check if schedule already exists in localStorage for this date
      const storedSchedule = localStorage.getItem(formattedDate);
      
      if (storedSchedule) {
        // If schedule is already stored, load it
        setSchedule(JSON.parse(storedSchedule)); 
      } else {
        // Otherwise, generate a new schedule and store it
        const newSchedule = getRandomSchedules();
        localStorage.setItem(formattedDate, JSON.stringify(newSchedule)); // Save it in localStorage
        setSchedule(newSchedule); // Set the newly generated schedule
      }

      // Load the memo from localStorage for this date
      const savedMemo = localStorage.getItem(formattedDate + '-memo');
      setSavedMemo(savedMemo || ''); // If no memo exists, set to an empty string
    }
  };

  const handleBackClick = () => {
    navigate(`/artist/${id}`);
  };

  const handleMemoInputChange = (e) => {
    setMemo(e.target.value);
  };

  const handleSaveMemo = (e) => {
    e.preventDefault();
    const formattedDate = formatDate(selectedDate);
    
    // Save the memo in localStorage using the selected date as the key (with '-memo' suffix)
    localStorage.setItem(formattedDate + '-memo', memo);
    setSavedMemo(memo); // Immediately update the saved memo state
    setMemo(''); // Clear the input field
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
                    }`}
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
            {schedule.length > 0 ? (
              <div className="schedule-item">
                <ul>
                  {schedule.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
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
              <textarea
                id="inputBox"
                value={memo}
                onChange={handleMemoInputChange}
                placeholder="메모를 입력하세요"
                required
              />
              <button id="saveBtn" type="submit">메모 저장</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
