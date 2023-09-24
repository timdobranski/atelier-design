import hero from '../../assets/images/hero2.jpg';
import heroVertical from '../../assets/images/hero-vertical2.jpg';
import logo from '../../assets/icons/logo-white.svg';
import '../../index.css';
import '../../index.mobile.css';
import './welcome.css';
import './welcome.mobile.css';
import { useState, useEffect } from 'react';
import clippy from 'clippyjs';

function Welcome() {
  const [fadedIn, setFadedIn] = useState(false);
  const [orientation, setOrientation] = useState('portrait');

  // Function to determine and set state for the orientation
  const checkOrientation = () => {
    if (window.innerWidth > window.innerHeight) {
      setOrientation('landscape');
    } else {
      setOrientation('portrait');
    }
  };

  useEffect(() => {
    setFadedIn(true);
  }, []);

  useEffect(() => {
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    return () => {
      window.removeEventListener('resize', checkOrientation);
    };
  }, []);

  const clippyAnimation = clippy.load('Clippy', (agent) => {
    // do anything with the loaded agent
    agent.show();
    agent.speak('When all else fails, bind some paper together. My name is Clippy.');
  });

  return (
    <div className={`row-1 ${fadedIn ? 'fade-in' : ''}`}>
      {orientation === 'portrait' ? (
        <img className='hero'src={heroVertical} alt="golden gate bridge at sunset" />
      ) : (
        <img className='hero' src={hero} alt='golden gate bridge at sunset' />
      )}
      <div className='hero-content-container'>
        <img className='logo' src={logo} alt='rooster grin company logo' />
        <div className='centered'>
          <h1 id='header1'>WELCOME TO</h1>
          <h2 id='header2' >Rooster Grin</h2>
        </div>
      </div>
      <div className='clippy-container'>
        {clippyAnimation}
      </div>
    </div>
  );
}

export default Welcome;
