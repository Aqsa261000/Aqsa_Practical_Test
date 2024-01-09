import React from 'react';
import LogoImage from '../../../assets/logo.png';
import InstagramLogo from '../../../assets/instagram.png';
import FacebookLogo from '../../../assets/facebook.png';
import YoutubeLogo from '../../../assets/youtube.png';
import TwitterLogo from '../../../assets/twitter.png';

import './footer.css';
const Footer = () => {
  return (
    <>
      <div class="footer">
        <div>
          <ul class="footerList">
            <li class="listItem logorights">
              <img src={LogoImage} alt="logo" class="logoimage" />
              <a href="">© 2023 Forreels. All rights reserved.</a>
            </li>

            <li class="listItem">
              <a href="">Terms</a>
            </li>
            <li class="listItem">
              <a href="">Privacy</a>
            </li>
            <li class="listItem">
              <a href="">Cookie preferences</a>
            </li>
            <li class="listItem">
              <a href="">Do not sell or share my personal information</a>
            </li>
          </ul>
        </div>
        <div class="footer-logos">
          <div class="footer-logo-container">
            <img class="footer-logo-style" src={InstagramLogo} />
          </div>
          <div class="footer-logo-container">
            <img class="footer-logo-style" src={YoutubeLogo} />
          </div>
          <div class="footer-logo-container">
            <img class="footer-logo-style" src={FacebookLogo} />
          </div>
          <div class="footer-logo-container">
            <img class="footer-logo-style" src={TwitterLogo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
