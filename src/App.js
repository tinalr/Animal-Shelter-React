import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdoptionsPage from './pages/AdoptionsPage';
import LostFoundPage from './pages/LostFoundPage';
import ResourcesPage from './pages/ResourcesPage';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='adoptions' element={<AdoptionsPage />} />
        <Route path='lostfound' element={<LostFoundPage />} />
        <Route path='resources' element={<ResourcesPage />} />
      </Routes>

    </div>
    
  );
};

export default App;
