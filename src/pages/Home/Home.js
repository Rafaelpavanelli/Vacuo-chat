import {} from './home.modules.css'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
function Home(){
  return(
    <>
    <header>
      <span> <Link to="/">Vácuo</Link> </span>
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </header>
    <body>
      
    </body>
    <footer>
      <span>Desenvolvido por Leonardo S. Oliveira e Rafael H. Pavanelli</span>
    </footer>
    </>

  )
}
export default Home;