import React from "react";
import "./styles/login.css"

const Login = () =>{
    return(
        <div class="container-fluid">
            <h1 class="text-center">NexiaSoft</h1>
            <form class="mx-auto">
                <h4 class="text-center">Bienvenido</h4>
                <div className="imagen"></div>
                <div class="mb-3 mt-5">
                  <label for="exampleInputEmail1" class="form-label">Usuario</label>
                  <input type="email"  placeholder="Ingresa el usuario" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                  <input type="password" placeholder="Ingrese la contraseña" class="form-control" id="exampleInputPassword1"/>
                </div>
              
                <button type="submit" class="btn btn-primary mt-5">Iniciar sesión</button>
              </form>
              <h5>Sistema de riego inteligente para agricultura de precisión</h5>
        </div>

    );
}

export default Login;