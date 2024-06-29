// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import MenuIndex from './pages/MenuIndex.jsx';
import Transaksi from './pages/Transaksi.jsx';
import HistoryPage from './pages/HistoryPage.jsx';
import { UserProvider } from './UserContext.jsx';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/menu" element={<MenuIndex />} />
          <Route path="/transaksi" element={<Transaksi />} />
          <Route path="/riwayat" element={<HistoryPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
