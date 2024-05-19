import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Principal from './components/pages/Principal';
import Desafios from './components/pages/Desafios';
import BotaoSubirTopo from './components/BotaoSubirTopo';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/desafios" element={<Desafios />} />
      </Routes>

      <div>
        <BotaoSubirTopo/>
      </div>
    </div>

  );
};

export default App;
