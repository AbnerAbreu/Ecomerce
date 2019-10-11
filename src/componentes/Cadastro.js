import React, {useState, useEffect} from 'react';
import Input from '../componentes/Input'
import "./Cadastro.scss";
import Botao from './Botao';


const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [count, setCount] = useState(0);
  const [mensagem , setMensagem] = useState("");

  const [person, setPerson] = useState(1);

  const addPerson = () =>{
    setPerson(person + 1)
  } 

  const resposta = (texto) =>{
    setMensagem(texto)
    setTimeout(() =>{
      setMensagem("")
    }, 2000)
  }
  
  const handleSubimit = e =>{
    e.preventDefault();
    if(email === confirmEmail){
      const paylod = {
        nome:nome,
        email: email,
        confirmEmail : confirmEmail,
        password: senha
      }
      localStorage.setItem(`Dados${count}`, JSON.stringify(paylod));
      setCount(count + 1);
      setNome("");
      setEmail("");
      setConfirmEmail("");
      setSenha("");
      resposta("Cadastro realizado com sucesso")
    }else{
      resposta("Os emails não correspondem");
      
    }

    }
  
  useEffect(() =>{
    fetch(`https://rickandmortyapi.com/api/character/${person}`,{
      method:"GET"
    }).then(result=>{
      return result.json();
    }).then(data =>{
      console.log(data.name , data.status)
    }).catch(()=> {
      console.log("erro")
    })
  },[person])
  
  return (
    <div className="cadastro">
          <h1>cadastre-se</h1>
          <p>{mensagem}</p>
        <form onSubmit={handleSubimit}>

        <Input 
        type="text" 
        label="Nome" 
        placeholder="Nome Completo"
        atualizarState={setNome}
        value={nome}
        obrigatorio
        />
        
        <Input 
        type="email" 
        label="Email" 
        placeholder="digite o Email"
        atualizarState={setEmail}
        value={email}
        />


        <Input 
        type="email" 
        label="Redigite o email" 
        placeholder="Confirme o Email"
        atualizarState={setConfirmEmail}
        value={confirmEmail}
        />
        
        <Input 
        type="password" 
        label="Senha" 
        placeholder="digite a senha"
        atualizarState={setSenha}
        value={senha}
        obrigatorio
        />

          <Botao text="Cadastrar" /> 

        </form> 


        

      </div>
    )
  }
  export default Cadastro;