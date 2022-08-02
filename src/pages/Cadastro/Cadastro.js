import { useState } from 'react';
import {Link} from 'react-router-dom'
import Cadastrar from '../../components/Cadastrar';
import './cadastro.css'
function Cadastro(){
  const [useNome,setUseNome]=useState("");
  const [useSenha,setUseSenha]=useState("");
  const [useEmail,setUseEmail]=useState("");
  return (
    <div className="cadastro">
      <form>
        <h1>Cadastro</h1>
        <label>
          <p>Nome de Usuario</p>
          <input type="text" placeholder='Nome completo' onChange={(e)=>setUseNome(e.target.value)} value={useNome} />
        </label>
        <label>
          <p>email</p>
          <input type="email" placeholder='Email de Usuario' onChange={(e)=>setUseEmail(e.target.value)} value={useEmail} />
        </label>
        <label>
        <p>Senha</p>
          <input type="password" placeholder='Senha do Usuario' onChange={(e)=>setUseSenha(e.target.value)} value={useSenha} />
        </label>
        <button onClick={(e)=>{
          e.preventDefault();
          Cadastrar({useNome,useEmail,useSenha})
        }}>Verificar</button>
        <h3>Ja possuo <Link to='/Login'>Login</Link></h3>
      </form>
    </div>
    )
}
export default Cadastro;