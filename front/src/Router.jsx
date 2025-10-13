import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />

        <Route path="*" element={ <NotFound/> } />
      </Routes>
    </>
  )
}

export default Router;