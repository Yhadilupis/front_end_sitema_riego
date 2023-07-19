import React, { useState, useEffect } from 'react';
import Navbar from '../components/navar';
import "../assets/styles/graficas.css"

const Tablas = () => {
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

  // Función reutilizable para calcular la media, varianza y desviación estándar
  const calculateStats = (data, key) => {
    if (!data || !data.length) return { average: 0, variance: 0, standardDeviation: 0 };

    const sum = data.map(item => item[key]).reduce((acc, value) => acc + value, 0);
    const average = sum / data.length;
    const squaredDifferencesSum = data.map(item => item[key]).reduce((acc, value) => acc + Math.pow(value - average, 2));
    const variance = squaredDifferencesSum / (data.length - 1);
    const standardDeviation = Math.sqrt(variance);

    return { average, variance, standardDeviation };
  };

  // Calcula las estadísticas para cada variable
  const { average: avgHumedadAmbiental, variance: varHumedadAmbiental, standardDeviation: stdHumedadAmbiental } = calculateStats(data, 'ambientHumidity');
  const { average: avgHumedadTierra, variance: varHumedadTierra, standardDeviation: stdHumedadTierra } = calculateStats(data, 'soilHumidity');
  const { average: avgTemperatura, variance: varTemperatura, standardDeviation: stdTemperatura } = calculateStats(data, 'ambientTemperature');
  const { average: avgIluminacion, variance: varIluminacion, standardDeviation: stdIluminacion } = calculateStats(data, 'luminosity');

  return (
    <div className='page_Principal'>
      <Navbar />
      <div className='container-tabla'>
        <table className="table">
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
        <h4>Media de la Humedad ambiental:</h4>
        <p>Media: {avgHumedadAmbiental}</p>
        <p>Varianza: {varHumedadAmbiental}</p>
        <p>Desviación Estándar: {stdHumedadAmbiental}</p>
        <h4>Media de la Humedad de la tierra:</h4>
        <p>Media: {avgHumedadTierra}</p>
        <p>Varianza: {varHumedadTierra}</p>
        <p>Desviación Estándar: {stdHumedadTierra}</p>
        <h4>Media de la Temperatura:</h4>
        <p>Media: {avgTemperatura}</p>
        <p>Varianza: {varTemperatura}</p>
        <p>Desviación Estándar: {stdTemperatura}</p>
        <h4>Media de la Iluminación:</h4>
        <p>Media: {avgIluminacion}</p>
        <p>Varianza: {varIluminacion}</p>
        <p>Desviación Estándar: {stdIluminacion}</p>
      </div>
    </div>
  );
};

export default Tablas;
