import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  Navigate
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import RelatorioAnalitico from './pages/RelatorioAnalitico';
import BlockList from './pages/BlockList';
import RelatorioAgressividade from './pages/RelatorioAgressividade';


function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
       <Route exact path="/" element={<Navigate to='/home' />} />
        <Route exact path="/home" element={<Dashboard />} />
        <Route exact path="/analitico" element={<RelatorioAnalitico />} />
        <Route exact path="/agressividade" element={<RelatorioAgressividade />} />
        <Route exact path="/blocklist" element={<BlockList />} />
      </Routes>
    </>
  );
}

export default App;
