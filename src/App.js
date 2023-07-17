import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Datos from './components/datos';
import Tablas from './components/tabla';
import Login from './components/login';



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
