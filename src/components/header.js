import React from 'react';
import './header.css';
import './Navbar.js'
import Navbar from './Navbar.js';
import { Button } from './Button';


function Header(){
   
    return(
        <div >
            <div className="topheader">
        <img className="logo" src="../../images/aoclogo.png" alt="logo"/>
           <ul className="items">
               <li>
               <i class="fas fa-envelope"></i>principal@adhiyamaan.ac.in</li>
               <li>
               <i class="fas fa-phone"></i>8220828924</li>
               <Button />
            </ul>
           </div>
          <Navbar />
      </div>
    )
}
export default Header;