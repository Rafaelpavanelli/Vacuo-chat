
import axios from 'axios';
import redirecting from './redirecting';
import Home from '../pages/Home/Home';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
function Auth({useNome,useSenha}){
  function Auth(){
  axios.post("http://192.168.2.114:3333/sessions",{
    "email":useNome,
    "password":useSenha
  })
  .then((response)=>{
    localStorage.setItem("token","response.data.token");
    redirecting(response.data)
    return response.data
  } 
  )
  .catch((error)=>{
    toast.error("Login não encontrado")
  });
  }
  useEffect(()=>{
    Auth()
  },[])

}export default Auth;