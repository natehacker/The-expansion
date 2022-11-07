import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
     <header>
       <div className="nav">
         <ul>
           <li>
             <Link to="/state">States</Link>
           </li>
           <li>
             <Link to="/population">Population</Link>
           </li>
           <li>
             <Link to="/year">Year</Link>
           </li>
         </ul>
       </div>
     </header>
   )
  }
   
  export default Nav;
  