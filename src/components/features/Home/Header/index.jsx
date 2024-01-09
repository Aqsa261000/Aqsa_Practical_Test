import React from 'react';
import Image1 from '../../../../assets/1.jpeg';
import Image2 from '../../../../assets/2.jpeg';
import Image3 from '../../../../assets/3.jpeg';
import Image4 from '../../../../assets/4.jpeg';
import Image5 from '../../../../assets/5.jpeg';
import Image6 from '../../../../assets/6.jpeg';
import Image7 from '../../../../assets/7.jpeg';
import Image8 from '../../../../assets/8.jpeg';
import Image9 from '../../../../assets/9.jpeg';
import Image10 from '../../../../assets/10.jpeg';
import Image11 from '../../../../assets/11.jpeg';
import Image12 from '../../../../assets/12.jpeg';
import Image13 from '../../../../assets/13.jpeg';
import Image14 from '../../../../assets/14.jpeg';
import Image15 from '../../../../assets/15.jpeg';
import Image16 from '../../../../assets/16.jpeg';
import Image17 from '../../../../assets/17.jpeg';
// import Image2 from '../../../../assets/2.jpeg';
import './header.css';

const Header = () => {
  return (
    <>
      <div class="header-columns">
        <div class="left-column">
          <img class="imageStyle" src={Image1} />
          <img class="imageStyle" src={Image2} />
          <img class="imageStyle" src={Image3} />
          <img class="imageStyle" src={Image4} />
        </div>
        <div class="right-column">
          <img class="imageStyle" src={Image5} />
          <img class="imageStyle" src={Image6} />
          <img class="imageStyle" src={Image7} />
          <img class="imageStyle" src={Image8} />
        </div>
        <div class="bottom-right-column">
          <img class="imageStyle" src={Image9} />
          <img class="imageStyle" src={Image10} />
        </div>
        <div class="bottom-center-column">
          <img class="imageStyle" src={Image11} />
          <img class="imageStyle" src={Image12} />
        </div>
        <div class="bottom-left-column">
          <img class="imageStyle" src={Image13} />
          <img class="imageStyle" src={Image14} />
        </div>
        <div class="top-row">
          <img class="top-row-left-column" src={Image15} />
          <img class="top-row-center-column" src={Image16} />
          <img class="top-row-right-column" src={Image17} />
        </div>
        {/* text lines */}
        {/* MAIN HEADING */}
        <div class="main-heading">
          The ultra modern
          <br />
          creative connection.
        </div>
        {/* SUB PARAGRAPH */}
        <div class="sub-paragraph">
          <span class="spanStyle1">
            Forreels.io is the central hub for
            <span class="spanStyle3">hiring creatives worldwide</span> in the
            <span class="spanStyle3">film and photography industry</span>, find
            <span class="spanStyle3">creative opportunities</span> as a
            creative, <span class="spanStyle3">build</span>, organize and
            deliver your work so you that you
            <span class="spanStyle3">create mind-blowing products</span> on
            time, every time.
          </span>
        </div>
        {/* HEADER SIGN UP BUTTON */}
        <div class="header-sign-up">
          <div class="header-sign-up-button">Sign up</div>
        </div>
      </div>
    </>
  );
};

export default Header;
