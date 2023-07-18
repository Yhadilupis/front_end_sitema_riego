import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Graficas = ({ ambientTemperature }) => {
  return (
    <div className='cuadroUno'>
      <h4 className="text-center">Temperatura</h4>
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          data={[{ time: new Date().toLocaleTimeString(), value: ambientTemperature }]}
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
          <Bar type="monotone" dataKey="value" fill="#DC143C" /> // Cambiar el color de relleno con la prop "fill"
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graficas;
