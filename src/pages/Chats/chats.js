import axios from "axios";
import "./chats.css"

function Chats(){

  const teste=()=>axios.get("")
.then((response)=>{
  console.log(response.data[0].chat);
  

})
.catch((error)=>{
  console.log(error);
})
return(<>
  
  <button onClick={()=>teste()}>Teste</button>
  </>
)
}
export default Chats;