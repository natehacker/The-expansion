import linegraph3 from "../assests/linegraph3.jpg"
import llgar from "../assests/llgar.jpg"

const Year= () => {
    return (
      <div className="year">

        {/* <img
          style={{ display: 'inline-flex', maxWidth: '190%' }}
          src={graph}
          alt="logo"
        /> */}
        {/* <img
          style={{ display: 'block', maxWidth: '170%' }}
          src={graph2}
          alt="logo" */}
        
       
     
     
   <div className="look"> 
   <div style={{ 
      // backgroundImage: `url("")` 
      backgroundColor:"black"
    }}>
      Hello World
    </div>
    
   { <h1>Population Year 2013 </h1> }
   <p>Human population has grown exponentially over the past century. It has done so largely by producing large amounts of food, and learning how to control disease.

</p>
     { <img
          
          src={linegraph3}
          alt="logo"
        /> }
   </div>
   <div className="hi"> 
   <h1>Population Year 2022</h1>
   <p>The current world population of 7.6 billion is expected to reach 8.6 billion in 2030, 9.8 billion in 2050 and 11.2 billion in 2100, according to a new United Nations report being launched today.</p>
     { <img
          // style={{ display: '', maxWidth: '190%' }}
          src={llgar}
          alt="logo"
        /> }
   </div>
        
        
   
      

       
     </div>
    )}
    

  export default Year