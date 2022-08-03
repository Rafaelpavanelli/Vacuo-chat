// Importaçoes de paginas
import Home from './pages/Home/Home';
import Chats from './pages/Chats/chats';
import Sobre from './pages/Sobre/sobre';
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        <Route path="/Chats" element={<Chats />}></Route>

      </Routes>
      
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
