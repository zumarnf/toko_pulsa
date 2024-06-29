import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import MenuIndex from './pages/MenuIndex.jsx';
import { UserProvider } from './UserContext.jsx';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/menu" element={<MenuIndex />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
