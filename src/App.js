import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Datos from './pages/HomePage';
import Tablas from './pages/tabla';
import Login from './pages/login';



function App() {
  return (
    <div>
        <Router>
      <Routes>
        <Route exact path="/" element={ <Login/>} />
        <Route exact path="/Datos" element={ <Datos/>} />
        <Route exact path="/Tablas" element={ <Tablas/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
