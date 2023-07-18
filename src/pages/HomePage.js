
import Graficas from '../components/graficaTemperatura';
import GraficaHumedad from '../components/graficaHumedad';
import GraficaHumedadTierra from '../components/graficaHumedadTierra';
import GraficaIluminacion from '../components/graficaIluminacion';
import "../assets/styles/graficas.css"
import Navbar from '../components/navar';
import React, { Component } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, off } from "firebase/database"; // Importa solo los métodos que necesitas


const firebaseConfig = {
  apiKey: "AIzaSyBJKDnjK9hsM5rm8n0je_KuPK_ZmUhohlg",
  authDomain: "pintegrador-2647b.firebaseapp.com",
  databaseURL: "https://pintegrador-2647b-default-rtdb.firebaseio.com",
  projectId: "pintegrador-2647b",
  storageBucket: "pintegrador-2647b.appspot.com",
  messagingSenderId: "1079512631655",
  appId: "1:1079512631655:web:070618a9725a0c32e507c2"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase
const database = getDatabase(app);


class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      hum: 0,
      hum2: 0,
      luz: 0,
      temperature: 0,
      dataChanged: false,
    };
  }


  enviarDatosBackend = () => {
    
    console.log(this.state)
    // Verificar si todos los valores son diferentes de cero
   
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
        "ambientHumidity": this.state.hum,
        "soilHumidity": this.state.hum2,
        "ambientTemperature": this.state.temperature,
        "luminosity": this.state.luz
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      console.log(raw)
      fetch("https://nexiasoftpi-production.up.railway.app/api/data/create", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    
  };


  componentDidMount() {
    // Suscríbete a los cambios en la ruta "sensorData/hum"
    const humRef = ref(database, 'sensorData/hum');
    onValue(humRef, (snapshot) => {
      this.setState({
        hum: snapshot.val()
      });
    });

    // Suscríbete a los cambios en la ruta "sensorData/hum2"
    const hum2Ref = ref(database, 'sensorData/hum2');
    onValue(hum2Ref, (snapshot) => {
      this.setState({
        hum2: snapshot.val()
      });
    });

    // Suscríbete a los cambios en la ruta "sensorData/luz"
    const luzRef = ref(database, 'sensorData/luz');
    onValue(luzRef, (snapshot) => {
      this.setState({
        luz: snapshot.val()
      });
    });

    // Suscríbete a los cambios en la ruta "sensorData/temperature"
    const temperatureRef = ref(database, 'sensorData/temperature');
    onValue(temperatureRef, (snapshot) => {
      this.setState({
        temperature: snapshot.val()
      });
    });

  }


  componentWillUnmount() {
    // Desvincula las suscripciones a cambios para evitar memory leaks.
    const humRef = ref(database, 'sensorData/hum');
    off(humRef);

    const hum2Ref = ref(database, 'sensorData/hum2');
    off(hum2Ref);

    const luzRef = ref(database, 'sensorData/luz');
    off(luzRef);

    const temperatureRef = ref(database, 'sensorData/temperature');
    off(temperatureRef);

  }



  // Llamamos al método enviarDatosBackend cada vez que los datos se actualicen
  componentDidUpdate(prevProps, prevState) {
   const {  hum, hum2, luz, temperature } = this.state;

    // Comprobar si los datos han cambiado desde la última actualización
    if ( 
        (hum !== prevState.hum ||
        hum2 !== prevState.hum2 ||
        luz !== prevState.luz ||
        temperature !== prevState.temperature)
    ) {
      // Si los datos han cambiado o hay cambios en los valores de hum, hum2, luz o temperature
      // llamar al método para enviar los datos si todos los valores son diferentes de cero
      if (hum !== 0 && hum2 !== 0 && luz !== 0 && temperature !== 0) {
        this.enviarDatosBackend();
      }

      // Resetear el estado dataChanged a false
    }
  }

  render() {
    const { hum, hum2, luz, temperature } = this.state;
    return (
      
      <div className='page_Principal'>
        <Navbar />
        <h1 class="text-center">Grafica de datos ambientales</h1>
        <div class="contenedor">
          <Graficas  ambientTemperature={temperature}/>
          <GraficaHumedad ambientHumidity={hum}/>
        </div>
        <div class="contenedor">
          <GraficaHumedadTierra soilHumidity={hum2}/>
          <GraficaIluminacion luminosity={luz}/>
        </div>

       

      </div>
    );
  }
}

export default HomePage;

