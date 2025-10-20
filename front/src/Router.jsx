import React from 'react'
import { Routes, Route } from 'react-router-dom';

// Vistas 
import Home from './pages/home/Home';
import Tecnologia from './pages/tecnologia/Tecnologia.jsx';

// soluciones 
import Agroindustria from './pages/soluciones/Agroindustria.jsx';
import Mineria from './pages/soluciones/Mineria.jsx';
import Energia from './pages/soluciones/Energia.jsx';
import DefensaSeguridad from './pages/soluciones/DefensaSeguridad.jsx';
import DominioMaritimo from './pages/soluciones/DominioMaritimo.jsx';
import Gobierno from './pages/soluciones/Gobierno.jsx';

// Soluciones Especificas 
import ScanAgroEmpresa from './pages/solucionesEspecificas/ScanAgroEmpresa.jsx';
import ScanSeguros from './pages/solucionesEspecificas/ScanSeguros.jsx';
import ScanRegional from './pages/solucionesEspecificas/ScanRegional.jsx';
import ScanProductividad from './pages/solucionesEspecificas/ScanProductividad.jsx';
import ScanRiesgo from './pages/solucionesEspecificas/ScanRiesgo.jsx';
import ScanControl from './pages/solucionesEspecificas/ScanControl.jsx';
import ScanRelevamiento from './pages/solucionesEspecificas/ScanRelevamiento.jsx';
import ScanGeogestion from './pages/solucionesEspecificas/ScanGeogestion.jsx';

// Pagina error 404 
import NotFound from './pages/notFound/NotFound';

// Pagina legales 
import PoliticaPrivacidad from './pages/legales/PoliticaPrivacidad';
import TerminoUsos from './pages/legales/TerminoUsos.jsx'

function Router() {
  return (
    <>
      <Routes>
          {/* Routes UI general  */}
        <Route path="/" element={ <Home/> } />
        <Route path='/tecnologia' element={<Tecnologia />} />

        {/* Soluciones  */}
        <Route path='/agroindustria' element={<Agroindustria />} />
        <Route path='/mineria' element={<Mineria />} />
        <Route path='/energia' element={<Energia />} />
        <Route path='/defensa-y-seguridad' element={<DefensaSeguridad />} />
        <Route path='/dominio-maritimo' element={<DominioMaritimo />} />
        <Route path='/gobierno' element={<Gobierno />} />

        {/* Soluciones Especificas  */}
        <Route path='/scanagroempresa' element={<ScanAgroEmpresa />} />
        <Route path='/scanseguros' element={<ScanSeguros />} />
        <Route path='/scanregional' element={<ScanRegional />} />
        <Route path='/scanproductividad' element={<ScanProductividad />} />
        <Route path='/scanriesgo' element={<ScanRiesgo />} />
        <Route path='/scancontrol' element={<ScanControl />} />
        <Route path='/scanrelevamiento' element={<ScanRelevamiento />} />
        <Route path='/scangeogestion' element={<ScanGeogestion />} />

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