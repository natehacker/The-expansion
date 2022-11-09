import linegraph3 from "../assests/linegraph3.jpg"
import { useNavigate } from "react-router-dom"
import population from "./Population"

const Population = (props) =>{
  let navigate = useNavigate()
 
  const showPop = (population)=>{
    navigate(`${population.name}`) 
  }

 
  console.log(props.selectedPopulation)
 if(!props.selectedPopulation) {
  return <h2> </h2>
 } else {
  return (
      <div className="grid">
        <div className="you">
        {<img

  src={linegraph3}
  alt="logo"
/> }
</div>

          {
              
             props.selectedPopulation.map((population)=>(
      
<div>
                   <div onClick={() =>showPop(population)} key={population.State}>
<h2>{population.Population}</h2>

                   </div>
              
                   
        


              <div>
             
             
              {population.population}

            

                </div>
              </div>
                   
              ))
          }
      </div>
  )
}
}
export default Population