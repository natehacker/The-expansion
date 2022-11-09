import louissaint from "../assests/louissaint.jpeg"
import react from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Nav from "./Nav"
import { useNavigate } from "react-router-dom"
import population from "./Population"







const State = (props) =>{
  let navigate = useNavigate()
  const showstate = (state)=>{
    navigate(`${state.name}`) 
  }

  console.log(props)
  console.log(props.selectedPopulation)
 if(!props.selectedPopulation) {
  return <h2>
    {<img
  style={{ display: 'inline-flex', maxWidth: '50%' }}
  src={louissaint}
  alt="logo"
/> }
    
    
     </h2>
 } else {
  return (
      <div className="grid">
        <div className="nate">

    

        </div>
       
        
          {
              
             props.selectedPopulation.map((state)=>(
      
<div>
                   <div onClick={() =>showstate(state)} key={state.name}>

<h2>{state.Name}</h2>
                   </div>
              
                  


              <div>
             
             
              {state.State}

            

                </div>
              </div>
                   
              ))
          }
      </div>
  )
}
}
export default State