import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../css/style.css";


const Navigation = () => {
  const scrollNos = () => {
    var el = document.getElementById("sobre-nos");
    setTest(true)
    console.log(test);
    test : true ? el.scrollIntoView({ behavior: 'smooth' }) : undefined;
  }

  return (
    <div className="nav">
      <div className="main__nav">
  
        <NavLink to='/Paralax/' onClick={scrollNos} className="btn main__nav-link main__nav-1" >
          Sobre nós
        </NavLink>
      </div>

      <div className="main__nav">
        <a href="#price" className="btn main__nav-link main__nav-2">
          Planos
        </a>
      </div>

      <div className="main__nav">
        <NavLink
          to='/Paralax/cadastro'
          className="btn main__nav-link main__nav-link-cadastro"
        >
          Cadastro
        </NavLink>
      </div>

      <div className="main__nav">
        <NavLink to="/Paralax/login" className="btn main__nav-link main__nav-link-login">
          Login
        </NavLink>
      </div>
    </div>
   
  );
};

export default Navigation;
