import axios from 'axios';
function Cadastrar({useNome,useEmail,useSenha}){
 axios.post("http://192.168.2.114:3333/users/cadastro",{
    "name": useNome,
    "password": useSenha,
    "username": "",
    "email": useEmail
  })
  .then((response)=>{
    console.log(response);
  })
.catch((error)=>{
  console.log(error);
})
}
export default Cadastrar;