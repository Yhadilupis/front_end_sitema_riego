import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const GraficaHumedadTierra = ({ soilHumidity }) => {
  return (
    <div className='cuadroTres'>
      <h4 className="text-center">Humedad de la tierra</h4>
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          data={[{ value: soilHumidity }]} // Usamos un arreglo con un solo objeto para la humedad de la tierra
          width={300}
          height={100}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="4 1 2" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar type="monotone" dataKey="value" fill="#A67616" /> // Cambiar el color de relleno con la prop "fill"
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficaHumedadTierra;
