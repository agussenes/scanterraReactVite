import React from 'react'
import { Routes, Route } from 'react-router-dom';

// vistas 
import Home from './pages/home/Home';
import Agroindustria from './pages/soluciones/Agroindustria.jsx';
import Mineria from './pages/soluciones/Mineria.jsx';

// page error 
import NotFound from './pages/notFound/NotFound';
// legales 
import PoliticaPrivacidad from './pages/legales/PoliticaPrivacidad';
import TerminoUsos from './pages/legales/TerminoUsos.jsx'

function Router() {
  return (
    <>
      <Routes>
          {/* Routes UI general  */}
        <Route path="/" element={ <Home/> } />

        {/* Soluciones  */}
        <Route path='/agroindustria' element={<Agroindustria />} />
        <Route path='/mineria' element={<Mineria />} />

        {/* Legales  */}
        <Route path='/politica-de-privacidad' element={<PoliticaPrivacidad />} />
        <Route path='/terminos-de-uso' element={<TerminoUsos />} />

        {/* Not found  */}
        <Route path="*" element={ <NotFound/> } />
      </Routes>
    </>
  )
}

export default Router;