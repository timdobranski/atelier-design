import hero from '../../assets/images/hero2.jpg';
import heroVertical from '../../assets/images/hero-vertical2.jpg';
import logo from '../../assets/icons/logo-white.svg';
import '../../index.css';
import '../../index.mobile.css';
import './welcome.css';
import './welcome.mobile.css';
import { useState, useEffect } from 'react';
import helpers from '../../helpers';

function Welcome() {
  const [fadedIn, setFadedIn] = useState(false);
  const [orientation, setOrientation] = useState("portrait");


  useEffect(() => {
    setFadedIn(true);
  }, []);

  useEffect(() => {
    helpers.checkOrientation(setOrientation);
    window.addEventListener("resize", helpers.checkOrientation);
    return () => {
      window.removeEventListener("resize", helpers.checkOrientation);
    };
  }, []);

  return (
    <div className={`row-1 ${fadedIn ? 'fade-in' : 'fade-out'}`}>
            {orientation === "portrait" ? (
        <img className='hero'src={heroVertical} alt="Portrait" />
      ) : (
        <img className='hero' src={hero} alt='hero' />
      )}
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
