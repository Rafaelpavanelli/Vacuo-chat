
import axios from 'axios';
import api from '../api';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
function Auth({useNome,useSenha}){
  axios.get("http://localhost:3000/Users")
  .then((response)=>{
  const result=response.data.find(data=>data.email===useNome)
  if(result.senha!=useSenha || result.senha==="") {
    toast.error("Senha ou email invalido")
  }
  else if(result===undefined){
    toast.error("Login não encontrado")
  }
  else if(result.nome){
    toast.success("welcome vacila")
  }
    console.log(result);
  } 
  )
  .catch((error)=>{
    toast.error("Login não encontrado")
  });

 

}export default Auth;