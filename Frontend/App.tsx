
import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ozellikler" element={<Features />} />
          <Route path="/fiyatlandirma" element={<Pricing />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/hakkimizda" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
