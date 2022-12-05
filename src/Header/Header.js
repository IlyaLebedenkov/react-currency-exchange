import './Header.css';
import React from 'react';

import Nav from '../Nav/Nav';

class Header extends React.Component{
  render(){
  return (
      <header>
      <div className="top-bar animate-dropdown"></div>
      <div className="main-header">
        <div className="container">
          <h1 className="site-title">МИГ - ОБМЕННЫЙ ПУНКТ</h1>
          <Nav />
        </div>
      </div>
    </header>
   );
 }
}

export default Header;
