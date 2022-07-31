import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import {} from './Login.css'
import React from 'react';
import {Link} from 'react-router-dom'
import Auth from "../../components/Auth"
function Login(){
  const [useNome,setUseNome] = useState("");
  const [useSenha,setUseSenha] = useState("");
 
  return(
   
    <div className="login">
      <form>
        <h1>Login</h1>
        <label>
          <p>Digite seu email</p>
        <input type="Email" placeholder='Email' onChange={(e)=>setUseNome(e.target.value) } value={useNome}/>
        </label>
        <label>
          <p>Digite sua senha</p>
        <input type="Password" placeholder="Senha" onChange={(e)=>setUseSenha(e.target.value) } value={useSenha}/>
        </label>
        <button onClick={(e)=>{
          e.preventDefault();
          console.log("FOi");
          console.log(useNome,useSenha);
          Auth({useNome,useSenha})
          }}>Login</button>
        <p>Não tem cadastro? <Link to="/cadastro">Cadastre-se</Link></p>
        
      </form>
      
    </div>
  )
}
export default Login;