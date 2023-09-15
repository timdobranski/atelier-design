import instagram from '../assets/icons/instagram.svg';
import facebook from '../assets/icons/facebook.svg';
import '../index.css';

function Footer() {
  return (
      <div className="column-both row-7">
        <h5 className="grid-full"> Follow Us: </h5>
        <img className="icon" src={instagram} alt="instagram" />
        <img className="icon" src={facebook} alt="facebook" />
      </div>
  );
}

export default Footer;
