import React from 'react';
import LogoImage from '../../../assets/logo.png';

import CloseLogo from '../../../assets/close.png';

import './navbar.css';

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={LogoImage} alt="logo" className="logoimage" />
        </div>
        <div>
          <ul className="list">
            <li class="listItem">
              <a href="#">Legacy</a>
            </li>
            <li className="listItem">
              <a href="#">SuperProducers</a>
            </li>
            <li className="listItem">
              <a href="#">What's New</a>
            </li>
            <li className="listItem">
              <a href="#">Customers</a>
            </li>
            <li className="listItem">
              <a href="#">Marketplace</a>
            </li>
            <li className="listItem">
              <a href="#">Creatives</a>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <button className="sign-in-button">Sign In</button>
          <button className="sign-up-button">Sign Up</button>
          <button className="checkbtn" id="check">
            <img src={CloseLogo} alt="" className="closelogo" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
