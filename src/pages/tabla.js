import React from 'react';
import Navbar from '../components/navar';
import "../assets/styles/graficas.css"

const Tablas = () =>{

    return(
        <div className='page_Principal'>
          <Navbar/>
     <div className='container-tabla'>
       <table class="table">
       <caption>Registro</caption>
      <thead>
  
      <tr>
      <th scope="col">Temperatura</th>
      <th scope="col">Humedad</th>
      <th scope="col">Precipitacion</th>
    </tr>
     </thead>
    <tbody>
    <tr>
      <td>1.90</td>
      <td>0.1</td>
      <td>100</td>
    </tr>
    <tr>
      <td>1.90</td>
      <td>0.1</td>
      <td>100</td>
    </tr>
    <tr>
      <td>1.90</td>
      <td>0.1</td>
      <td>100</td>
    </tr>
  </tbody>
        </table>
        </div>

        </div>

    )
}

export default Tablas;