import React, { useState, useEffect } from 'react';
import Navbar from '../components/navar';
import "../assets/styles/graficas.css"

const Tablas = () =>{

  const [data, setData] = useState([]);

  useEffect(() => {
    enviarDatosBackend(); // Llamamos a la función para obtener los datos cuando el componente se monta
  }, []);

  const enviarDatosBackend = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch("https://nexiasoftpi-production.up.railway.app/api/data/view", requestOptions)
      .then(response => response.json()) // Parseamos la respuesta a JSON
      .then(result => setData(result)) // Actualizamos el estado con los datos obtenidos
      .catch(error => console.log('error', error));
  };

  const sum1 = data.map(item => item.ambientHumidity).reduce((acc, ambientHumidity) => acc + ambientHumidity, 0);
  const average1 = sum1 / data.length;
  const squaredDifferencesSum1 = data.map(item => item.ambientHumidity).reduce((acc, ambientHumidity) => acc + Math.pow(ambientHumidity - average1, 2));
  const variance1 = squaredDifferencesSum1 / (data.length - 1);
  const standardDeviation1 = Math.sqrt(variance1);

  const sum2 = data.map(item => item.soilHumidity).reduce((acc, soilHumidity) => acc + soilHumidity, 0);
  const average2 = sum2 / data.length;
  const squaredDifferencesSum2 = data.map(item => item.soilHumidity).reduce((acc, soilHumidity) => acc + Math.pow(soilHumidity - average2, 2));
  const variance2 = squaredDifferencesSum2 / (data.length - 1);
  const standardDeviation2 = Math.sqrt(variance2);

  const sum3 = data.map(item => item.ambientTemperature).reduce((acc, ambientTemperature) => acc + ambientTemperature, 0);
  const average3 = sum3 / data.length;
  const squaredDifferencesSum3 = data.map(item => item.ambientTemperature).reduce((acc, ambientTemperature) => acc + Math.pow(ambientTemperature - average3, 2));
  const variance3 = squaredDifferencesSum3 / (data.length - 1);
  const standardDeviation3 = Math.sqrt(variance3);

  // Calcula la suma de los valores utilizando el método map() y reduce()
  const sum = data.map(item => item.luminosity).reduce((acc, luminosity) => acc + luminosity, 0);
  // Calcula la media dividiendo la suma entre la cantidad de elementos
  const average = sum / data.length;
  // Calcula la suma de los cuadrados de las diferencias entre cada dato y la media
  const squaredDifferencesSum = data.map(item => item.luminosity).reduce((acc, luminosity) => acc + Math.pow(luminosity - average, 2));
  // Calcula la varianza
  const variance = squaredDifferencesSum / (data.length - 1);
  // Calcula la desviación estándar (raíz cuadrada de la varianza)
  const standardDeviation = Math.sqrt(variance);


  return (
    <div className='page_Principal'>
      <Navbar/>
      <div className='container-tabla'>
      <table class="table">
        <thead>
          <tr>
            <th>Humedad ambiental</th>
            <th>Humedad de la tierra</th>
            <th>Temperatura</th>
            <th>Iluminación</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.ambientHumidity}</td>
              <td>{item.soilHumidity}</td>
              <td>{item.ambientTemperature}</td>
              <td>{item.luminosity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Media de la Humedad ambiental: </h4>
      {/*<p>Suma total de los valores: {sum1}</p>*/}
      <p>Media: {average1}</p>
      <p>Varianza: {variance1}</p>
      <p>Desviación Estándar: {standardDeviation1}</p>
      <h4>Media de la Humedad de la tierra:</h4>
      {/*<p>Suma total de los valores: {sum2}</p>*/}
      <p>Media: {average2}</p>
      <p>Varianza: {variance2}</p>
      <p>Desviación Estándar: {standardDeviation2}</p>
      <h4>Media de la Temperatura:</h4>
      {/*<p>Suma total de los valores: {sum3}</p>*/}
      <p>Media: {average3}</p>
      <p>Varianza: {variance3}</p>
      <p>Desviación Estándar: {standardDeviation3}</p>
      <h4>Media de la Iluminación:</h4>
      {/*<p>Suma total de los valores: {sum}</p>*/}
      <p>Media: {average}</p>
      <p>Varianza: {variance}</p>
      <p>Desviación Estándar: {standardDeviation}</p>
      </div>
    </div>
    
  );
};

export default Tablas;

    