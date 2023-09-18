import hero from '../../assets/images/hero2.jpg';
import logo from '../../assets/icons/logo-white.svg';
import '../../index.css';
import './welcome.css';
import { useState, useEffect } from 'react';

function Welcome() {
  const [fadedIn, setFadedIn] = useState(false);

  useEffect(() => {
    setFadedIn(true);
  }, []);

  return (
    <div className={`row-1 fade-in ${fadedIn ? 'fade-in' : 'fade-out'}`}>

      <img className='hero' src={hero} alt='hero' />
      <div className='hero-content-container'>
        <img className='logo' src={logo} alt='logo' />
        <div className='centered'>
          <h1 id='header1'>WELCOME TO</h1>
          <h2 id='header2' >Rooster Grin</h2>
        </div>

      </div>
    </div>
  );
}

export default Welcome;
