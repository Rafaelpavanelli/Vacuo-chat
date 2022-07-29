
import {Link} from 'react-router-dom'
function Home(){
  return(
    <header>
      <span> <Link to="/">Vácuo</Link> </span>
      <ul>
        <li>
          <Link to='/Sobre'>Sobre</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </header>
  )
}
export default Home;