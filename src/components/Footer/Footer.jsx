import { BsFacebook, BsInstagram } from 'react-icons/bs';
import '../../index.css';
import './footer.css';

function Footer() {
  return (
    <div className='footer-container centered'>
      <p className='followUs'> Follow Us: </p>
      <a href="https://www.facebook.com/" aria-label='See our facebook page'>
        <BsFacebook className='social-icon' />
      </a>
      <a href="https://www.instagram.com/" aria-label='See our instagram page'>
        <BsInstagram className='social-icon' />
      </a>
    </div>
  );
}

export default Footer;
