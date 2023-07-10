import React from 'react';
import Graficas from './graficaTemperatura';
import GraficaHumedad from './graficaHumedad';
import GraficaPrecipitacion from './graficaPrecipitacion';
import "./styles/graficas.css"
import Navbar from './navar';

const Datos = () =>{
    return(
        <div>     
          <Navbar/>
     <h1 class="text-center">Grafica de datos ambientales</h1>
       <div class="contenedor">
       <Graficas/> 
        <GraficaHumedad/>
       <GraficaPrecipitacion/>
       </div>
        
        </div>
    )
}

export default Datos;