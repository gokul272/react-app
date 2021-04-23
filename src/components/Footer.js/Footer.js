import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
          <img className="logo1" src="../images/aoclogo1.png" alt="logo"/>
          </div>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/administration'>Chairperson</Link>
            <Link to='/principal'>Principal</Link>
            <Link to='/dean'>Dean(Acadamin)</Link>
            <Link to='/contact'>HOD'S</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
            <Link to='/login'>Staff Login</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items2'>
            <h2>Videos</h2>
            <Link to='/'>Sports Day</Link>
            <Link to='/'>Functions</Link>
            <Link to='/'>Hostel Day</Link>
            <Link to='/'>Graduation day</Link>
          </div>
          <div className='footer-link-items1'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <p className='website-rights'>ADHIYAMAAN COLLEGE OF ENGINEERING © 2020</p>
    </div>
  );
}

export default Footer;
