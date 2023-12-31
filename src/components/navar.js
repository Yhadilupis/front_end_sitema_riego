import React, { useState } from "react";
import "../assets/styles/navar.css"

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
    }  


  return (
    <nav className="nav">
      <h2 href="#" className="nav__brand">
        NexiaSoft
      </h2>
      <ul className={active}>
        <li className="nav__item">
          <a href="/Datos#" className="nav__link">
            Graficas
          </a>
        </li>
        <li className="nav__item">
          <a href="/Tablas#" className="nav__link">
            Distribución de probabilidad
          </a>
        </li>
        <li className="nav__item">
          <a href="/"  className="nav__link">
            Cerrar sesión
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
    
  );
}

export default Navbar;