import React, { Component } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Values from '../components/Values';
import Areas from '../components/Areas';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../scss/Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
          <div class="container">
            <About/>
            <Values/>
            <Areas/>
            <Contact/>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;
