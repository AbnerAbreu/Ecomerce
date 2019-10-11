import React, { useState, useEffect } from 'react';
import Botao from './Botao';
import { Link } from 'react-router-dom';
import Pr1 from '../img/Pastel.jpg'
import "./Produto.scss";



const Produto = ({ conteudo, valor , nome, id }) => {
    const valorNovo = Number(valor);
    const [quantidade, setQuantidade] = useState(0);
    const [valorTotal, setValorTotal ] = useState(1);

    
    const incrementar = () =>{
        if(quantidade < 10){
            setQuantidade(quantidade + 1)
        } else{
            return;
        }
    }

    const decrementar = () =>{
        if(quantidade > 0){
            setQuantidade(quantidade - 1)
        }
    }

    useEffect(()=>{
        const total = (valorNovo * quantidade);
        return setValorTotal((total.toFixed(2)).replace(".", ","));
        
    }, [incrementar, decrementar])

    const handleSubmit = e => {
        e.preventDefault();
        localStorage.setItem(`Valor Total${id}`, valorTotal);

    }

    return (
      <div className="produto">
          <h3>{nome}</h3>
          <div className="img">
            <img src={conteudo} alt="" />
          </div>
          <p>{`R$${valorTotal}`}</p> 

          <div className="bnts">
          <Botao funcao={decrementar} text="-"/>
          <p>{quantidade}</p>
          <Botao funcao={incrementar} text="+"/>
          </div>

          
            <Botao funcao={handleSubmit} text="Comprar"/>



      </div>

    )
  }
  export default Produto;