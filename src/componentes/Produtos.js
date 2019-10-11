import React from 'react';
import Produto from '../componentes/Produto';
import './Produtos.scss'
import m1 from '../img/arma1.jpg'


const Produtos = () => {
    return (
      <div className="Produtos">
          <h1>Produtos</h1>
          
          <div className="line">
            <Produto nome="" conteudo={m1} valor="5" id="1"/>
            <Produto nome="" conteudo={m1} valor="5" id="2"/>
            <Produto nome="" conteudo={m1} valor="5" id="3"/>
          </div>
          <div className="line">
            <Produto nome="" conteudo={m1} valor="5" id="4"/>
            <Produto nome="" conteudo={m1} valor="5" id="5"/>
            <Produto nome="" conteudo={m1} valor="5" id="6"/>
          </div>
          <div className="line">
            <Produto nome="" conteudo={m1} valor="5" id="7"/>
            <Produto nome="" conteudo={m1} valor="5" id="8"/>
            <Produto nome="" conteudo={m1} valor="5" id="9"/>
          </div>
      </div>
    )
  }
  export default Produtos;