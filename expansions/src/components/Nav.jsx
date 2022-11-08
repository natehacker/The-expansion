import React from 'react'
import { Link } from 'react-router-dom'



const Nav = () => {
    return (
     <header>
       <div className="nav">
         <ul>
           <li>
             <Link to="/year">year</Link>
           </li>
           <li>
             <Link to="/state">state</Link>
           </li>
           <li>
             <Link to="/population">population</Link>
           </li>
         </ul>
         
       </div>
     </header>
   )
  }
   
  export default Nav;
  