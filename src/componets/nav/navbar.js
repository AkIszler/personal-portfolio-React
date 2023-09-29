import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import logo from '../../assets/logo1.png';
import contantBTN from '../../assets/contact.png';

const Navbar = () => {
  return (
      <nav className="navbar">
          <img src={logo} alt="logo" className='logo' id='logo'/>
          <div className="dTopMenu">
              <Link className='navLinkItem'>Home</Link>
              <Link className='navLinkItem'>Portfolio</Link>
              <Link className='navLinkItem'>About</Link>
              <Link className='navLinkItem'>Links</Link>
              
          </div>
          <button className="dTopButon"><img src={contantBTN} alt="contactBTN" className='contactBTN' />Contact Me</button>
   </nav>
  )
}

export default Navbar