import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
function Cadastrar({useNome,useEmail,useSenha}){
 axios.post("http://192.168.2.114:3333/users/cadastro",{
    "name": useNome,
    "password": useSenha,
    "username":useNome+"eu" ,
    "email":useEmail 
  })
  .then((response)=>{
    toast.success("Foi")
  })
.catch((error)=>{
  console.log(error);
})
}
export default Cadastrar;