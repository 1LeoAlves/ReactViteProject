import { useState, useEffect } from 'react'
import LinkRoutes from './assets/components/LinkRoutes';
import axios from 'axios';
import './App.css'

function App() {
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api"); //Faz uma requisição a rota através do axios para o node.
    console.log(response.data.fruits);
  }
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <>
        <LinkRoutes></LinkRoutes>
    </>
  )
}




export default App;