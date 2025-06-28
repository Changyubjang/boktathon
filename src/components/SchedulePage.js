import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SchedulePage.css';

const SchedulePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());

  // 샘플 아티스트 데이터
  const artistData = {
    1: { name: 'BTS', image: 'https://via.placeholder.com/200x200/FF6B6B/white?text=BTS' },
    2: { name: 'BLACKPINK', image: 'https://via.placeholder.com/200x200/4ECDC4/white?text=BLACKPINK' },
    3: { name: 'TWICE', image: 'https://via.placeholder.com/200x200/45B7D1/white?text=TWICE' },
    4: { name: 'IU', image: 'https://via.placeholder.com/200x200/96CEB4/white?text=IU' },
  };

  const artist = artistData[id] || { name: 'Unknown Artist', image: 'https://via.placeholder.com/200x200/999/white?text=Unknown' };

  // 샘플 일정 데이터
  const scheduleData = {
    '2024-01-15': { title: '콘서트', location: '올림픽공원', time: '19:00' },
    '2024-01-20': { title: '팬사인회', location: '코엑스몰', time: '14:00' },
    '2024-01-25': { title: '앨범 발매', location: '온라인', time: '00:00' },
    '2024-02-01': { title: '방송 출연', location: 'KBS', time: '20:00' },
  };

  const handleBackClick = () => {
    navigate(`/artist/${id}`);
  };

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

  const handleDateClick = (date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  const currentDateStr = formatDate(selectedDate);
  const currentSchedule = scheduleData[currentDateStr];

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
                      date && formatDate(date) === currentDateStr ? 'selected' : ''
                    } ${date && scheduleData[formatDate(date)] ? 'has-schedule' : ''}`}
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
            {currentSchedule ? (
              <div className="schedule-item">
                <h4>{currentSchedule.title}</h4>
                <p>📍 {currentSchedule.location}</p>
                <p>🕐 {currentSchedule.time}</p>
              </div>
            ) : (
              <p className="no-schedule">해당 날짜에 일정이 없습니다.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage; 