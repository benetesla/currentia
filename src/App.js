import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Section/Home/Home';
import Fase from './Section/Fases/Fase';
import Cards from './Section/Cards/Cards';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/History" element={<Fase />} />  
          <Route path="/Cards" element={<Cards />} />                   
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
