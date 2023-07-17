import React, { useState, useEffect } from 'react'
import "../assets/styles/graficas.css"
import luzRef from "../pages/HomePage"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const GraficaIluminacion = () => {

    const [data, setData] = useState([]);

  // Función para obtener los datos mediante fetchData
  const getData = async () => {
    const jsonData = await luzRef();
    setData(jsonData); // Asignar los datos al estado
  };

  // Efecto para llamar a getData() al montar el componente y cada vez que data cambie
    useEffect(() => {
    getData();
    const interval = setInterval(getData, 5000); // Llama a getData cada 5 segundos (puedes ajustar el intervalo según tus necesidades)

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  return (
      <div className='cuadroCuatro'>
           <h4 class="text-center">Iluminación</h4>
    <ResponsiveContainer width="100%" aspect={2}>
        <BarChart 
            data={data}
            width={300}
            height={100}
            margin={{
                top:5,
                right:30,
                left:20,
                bottom:5
            }}
        >
        <CartesianGrid strokeDasharray="4 1 2" />    
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar type="monotone" dataKey="value" stroke="#6b48ff" />
        </BarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default GraficaIluminacion;