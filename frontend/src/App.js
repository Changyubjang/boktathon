import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import ArtistPage from './components/ArtistPage';
import SchedulePage from './components/SchedulePage';
import ChatPage from './components/ChatPage';
import ShoppingPage from './components/ShoppingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artist/:id" element={<ArtistPage />} />
          <Route path="/artist/:id/schedule" element={<SchedulePage />} />
          <Route path="/artist/:id/chat" element={<ChatPage />} />
          <Route path="/artist/:id/shopping" element={<ShoppingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
