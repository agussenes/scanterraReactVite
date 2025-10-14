import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import PoliticaPrivacidad from './pages/legales/PoliticaPrivacidad';
import TerminoUsos from './pages/legales/TerminoUsos.jsx'

function Router() {
  return (
    <>
      <Routes>
          {/* routes UI general  */}
        <Route path="/" element={ <Home/> } />

        {/* legales  */}
        <Route path='/politica-de-privacidad' element={<PoliticaPrivacidad />} />
        <Route path='/terminos-de-uso' element={<TerminoUsos />} />
        {/* not found  */}
        <Route path="*" element={ <NotFound/> } />
      </Routes>
    </>
  )
}

export default Router;