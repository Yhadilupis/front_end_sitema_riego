import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const GraficaHumedad = ({ ambientHumidity }) => {
  return (
    <div className='cuadroDos'>
      <h4 className="text-center">Humedad ambiental</h4>
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          data={[{ value: ambientHumidity }]} // Usamos un arreglo con un solo objeto para la humedad ambiental
          width={300}
          height={100}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar type="monotone" dataKey="value" fill="#00FFFF" /> // Cambiar el color de relleno con la prop "fill"
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficaHumedad;
