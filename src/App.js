import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './components/pages/Principal';
import Desafios from './components/layout/Desafios';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/desafios" element={<Desafios />} />
      </Routes>
  );
};

export default App;
