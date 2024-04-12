import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import FicheLogement from './pages/ficheLogement.js';
import Apropos from './pages/apropos.js';
import QuatreCentQuatre from './pages/quatreCentquatre.js';

function App() {
  return (
    <div>
        <Routes> {/* Utilisez Routes pour définir vos routes */}
          <Route path="/" element={<Home />} /> {/* Utilisez 'element' pour définir le composant à rendre */}
          <Route path="/fiche_logement/:id" element={<FicheLogement />} />
          <Route path="/a_propos" element={<Apropos />} />
          <Route path="*" element={<QuatreCentQuatre />} />
        </Routes>
    </div>
  );
}

export default App;