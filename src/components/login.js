import React, { useState } from "react";
import "./styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://nexiasoftpi-production.up.railway.app/api/user/login", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center">NexiaSoft</h1>
      <form className="mx-auto" onSubmit={handleSubmit}>
        <h4 className="text-center">Bienvenido</h4>
        <div className="imagen"></div>
        <div className="mb-3 mt-5">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Usuario
          </label>
          <input
            type="email"
            placeholder="Ingresa el usuario"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            placeholder="Ingrese la contraseña"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-5">
          Iniciar sesión
        </button>
      </form>
      <h5>Sistema de riego inteligente para agricultura de precisión</h5>
    </div>
  );
};

export default Login;