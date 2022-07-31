import {Link} from 'react-router-dom';
import db from '../Data/db.json'
import { toast } from 'react-toastify';
function Auth({useNome,useSenha}){
  db.Users.forEach((item) => {
    if(useNome===item.email && useSenha===item.senha){
      toast.success("Ola "+ item.nome);
    }
    else{
      toast.warning("Login não encontrado")
    }
    
  });
  // if(useNome==db.Users[0].email && useSenha==db.Users[0].senha){
  //    toast.success("Bem Vindo "+db.Users[0].nome)
     
  // }else{
  //   toast.error("Falha ao logar")
  // }
}export default Auth;