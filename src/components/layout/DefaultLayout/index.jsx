import React from 'react';
import './defaultLayout.css';
import { Navbar, Footer } from '../../common';
const DefaultLayout = (props) => {
  return (
    <>
    <div className='default-container'>
      <Navbar />
      <div className='body-container'>{props.children}</div>
      <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
