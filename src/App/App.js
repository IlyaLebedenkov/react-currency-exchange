import './App.css';
import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Rate from '../Rate/Rate';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import {BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
  return (
     
    <div className="site">
     <Header />
    <div className="container">
      <main>
        <BrowserRouter>
          <Routes>
            <Route  path="/" element={<Rate />} />
            <Route  path="/contacts" element={<Contacts />} />
            <Route  path="/about" element={<About/>} />
          </Routes>
        </BrowserRouter>
      </main>
  
    </div>

    <div className="container" id="cookie_info">
      <div className="site-content">
        <div className="well">
          На нашем сайте мы используем cookie для сбора информации технического характера.<br /> в частности, для
          персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего местоположения.&nbsp;
          </div>
      </div>
    </div>

    <Footer />
  </div>
   );
 }
}

export default App;
