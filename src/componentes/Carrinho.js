import React, {useState, useEffect } from 'react';
import './Carrinho.scss';
import Pague from '../img/Paynow.jpg'



const Carrinho = () => {
  const [valorLocal, setValorLocal] = useState("")
  useEffect(() => {
    const valor1 = localStorage.getItem("Valor Total1");
    const valor2 = localStorage.getItem("Valor Total2");
    const valor3 = localStorage.getItem("Valor Total3");
    const valor4 = localStorage.getItem("Valor Total4");
    const valor5 = localStorage.getItem("Valor Total5");
    const valor6 = localStorage.getItem("Valor Total6");
    const valor7 = localStorage.getItem("Valor Total7");
    const valor8 = localStorage.getItem("Valor Total8");
    const valor9 = localStorage.getItem("Valor Total9");
    const valorTotal = (valor1 + valor2 + valor3 + valor4 + valor5 + valor6 + valor7 + valor8 + valor9);
    setValorLocal(valorTotal)
  })
    return (
      <div className="Car">
          <img src={Pague} alt="pague" />
          <h1>Valor Total a Pagar: {valorLocal}</h1>
      </div>
    )
  }
  export default Carrinho;