import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Section/Home/Home';
import Fase from './Section/Fases/Fase';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fase1" element={<Fase />} />
          <Route path="/fase2" element={<Fase />} />
          <Route path="/fase3" element={<Fase />} />                
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
