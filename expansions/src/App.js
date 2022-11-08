import { BASE_URL } from "./components/Global"
import Nav from "./components/Nav"
import State from "./components/State"
import './App.css';
import axios from "axios"
import { useState,useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Population from "./components/Population"



const App = () => {
  const [selectedPopulation, setSelectedState] = useState()
 
 useEffect(()=>{
  const getState = async () => {
     const response = await axios.get(`${BASE_URL}`)
     console.log(response.data.data[0])
     setSelectedState(response.data.data)
  }
  getState()
 }, [])

  return (
    <div>
       <Nav />
       
      <Routes>
      <Route path ="/population" element ={<Population selectedPopulation={selectedPopulation}/>}/>
         <Route path ="/state" element ={<State selectedPopulation={selectedPopulation}/>}/>
      </Routes>  
   
    </div>
  );
}

export default App;