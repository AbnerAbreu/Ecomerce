import React from 'react';
import './Botao.scss';


const Botao = ({ text,funcao }) => {
    
    return (
        <button onClick={funcao} className="Botao">{text}</button>
    )
}
export default Botao;