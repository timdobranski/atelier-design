import hero from '../assets/images/hero.jpg';
import logo from '../assets/icons/logo-white.svg';
import '../index.css';

function Welcome() {
  return (
      <div className="column-both row-1">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="grid-full">Welcome To</h1>
        <h2 className="grid-full">Rooster Grin</h2>
        <img className="grid-full" src={hero} alt="hero" />
      </div>
  );
}

export default Welcome;
