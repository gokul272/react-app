import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';



function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [navbar,setNavbar] = useState(false);

  
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const changeBackround = () =>{
  if(window.scrollY >= 100){
    setNavbar(true)
  }
  else{
    setNavbar(false)
  }

  };

  window.addEventListener('scroll',changeBackround);

  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              AboutUs
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/administration' className='nav-links' onClick={closeMobileMenu}>
              Administration
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Acadamic
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/facilities'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Facilities
            </Link>
            
          </li>
          <li className='nav-item'>
            <Link to='/randd' className='nav-links' onClick={closeMobileMenu}>
              R&D
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/ceo' className='nav-links' onClick={closeMobileMenu}>
              CEO
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/placements' className='nav-links' onClick={closeMobileMenu}>
              Placements
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/sports' className='nav-links' onClick={closeMobileMenu}>
              Sports
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/examresults' className='nav-links' onClick={closeMobileMenu}>
              ExamResults
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              ContactUs
            </Link>
          </li>
          <li>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
