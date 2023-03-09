import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Section/Home/Home';
import History from './Section/History/History';
import CardsScient from './Section/CardsScient/CardsScientist';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/cards" element={<CardsScient />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
