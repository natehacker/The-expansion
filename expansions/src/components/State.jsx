import react from "react"
import { useState } from "react"



const State = (props) =>{
  console.log(props)
  console.log(props.selectedPopulation)
 if(!props.selectedPopulation) {
  return <h2> </h2>
 } else {
  return (
      <div className="grid">
          {
              
             props.selectedPopulation.map((State)=>(
      
              


              <div>
               <h1 key={State} className="">
              {props.State}
               </h1>

             

                </div>
              
                   
              ))
          }
      </div>
  )
}
}
export default State