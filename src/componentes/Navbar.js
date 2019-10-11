import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "./Navbar.scss";
import Produtos from '../componentes/Produtos';
import Carrinho from '../componentes/Carrinho';


const Navbar = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const abrirMenu = () => {
    setMenuAtivo(!menuAtivo);
  };
  const fecharMenu = () =>{
    setMenuAtivo(false)
  }


  return (
    <div className="Navbar">
      <nav>
        <div onClick={abrirMenu} id="menu-hamburguer">
          <span className={menuAtivo ? "virax1" : ""}></span>
          <span className={menuAtivo ? "sumirTiro" : ""}></span>
          <span className={menuAtivo ? "virax2" : ""}></span>
        </div>
      </nav>
      <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
        <Link onClick={fecharMenu} to="/">Home</Link>
        <Link onClick={fecharMenu} to="/carrinho">Carrinho</Link>
        <Link onClick={fecharMenu} to="/produtos">Produtos</Link>
      </section>
  
    </div>

    
  );
};
export default Navbar;