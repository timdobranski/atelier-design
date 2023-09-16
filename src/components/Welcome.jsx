import hero from '../assets/images/hero.jpg';
import logo from '../assets/icons/logo-white.svg';
import '../index.css';
import './welcome.css';

function Welcome() {
  return (
    <div className='welcome-container row-1'>
      <img className='logo' src={logo} alt='logo' />
      <div className='centered'>
        <h1 id='header1'>WELCOME TO</h1>
        <h2 id='header2' >Rooster Grin</h2>
        <img className='background-image' src={hero} alt='hero' />
        <button className='blueButton'>CLICK HERE</button>
      </div>
    </div>
  );
}

export default Welcome;
