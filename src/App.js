// Importaçoes de paginas
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/sobre';
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
// Importações de funções
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path  ="/" element={<Home />}></Route>
        <Route path  ="/Login" element={<Login />}></Route>
        <Route path  ="/cadastro" element={<Cadastro />}></Route>
        <Route path="/Sobre" element={<Sobre />}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
