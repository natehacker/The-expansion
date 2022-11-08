// import { useState } from "react"
// import { Link } from "react-router-dom"
// import Nav from "./Nav"
// import { useNavigate } from "react-router-dom"
// import population from "./Population"

// const Pop = (props) =>{
//   let navigate = useNavigate()
//   const showPop = (population)=>{
//     navigate(`${population.name}`) 
//   }

//   console.log(props)
//   console.log(props.selectedPopulation)
//  if(!props.selectedPopulation) {
//   return <h2> </h2>
//  } else {
//   return (
//       <div className="grid">
//           {
              
//              props.selectedPopulation.map((population)=>(
      
// <div>
//                    <div onClick={() =>showPop(population)} key={population.name}>

// <h2>{population.name}</h2>
//                    </div>
              
                   



//               <div>
             
             
//               {population.population}

            

//                 </div>
//               </div>
                   
//               ))
//           }
//       </div>
//   )
// }
// }
// export default population