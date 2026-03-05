import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { DilSaglayici } from './contexts/DilContext';
import Duzen from './components/Duzen';
import AnaSayfa from './pages/AnaSayfa';
import Ozellikler from './pages/Ozellikler';
import Fiyatlandirma from './pages/Fiyatlandirma';
import Iletisim from './pages/Iletisim';
import Hakkimizda from './pages/Hakkimizda';

const App: React.FC = () => {
  return (
    <DilSaglayici>
      <Router>
        <Duzen>
          <Routes>
            <Route path="/" element={<AnaSayfa />} />
            <Route path="/ozellikler" element={<Ozellikler />} />
            <Route path="/fiyatlandirma" element={<Fiyatlandirma />} />
            <Route path="/iletisim" element={<Iletisim />} />
            <Route path="/hakkimizda" element={<Hakkimizda />} />
          </Routes>
        </Duzen>
      </Router>
    </DilSaglayici>
  );
};

export default App;
