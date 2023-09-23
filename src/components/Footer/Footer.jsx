import { BsFacebook, BsInstagram } from 'react-icons/bs';
import '../../index.css';
import '../../index.mobile.css';
import './footer.css';
import './footer.mobile.css';

function Footer() {
  return (
    <div className='footer-container centered'>
      <p className='section-titles header-title'> FOLLOW US: </p>
      <a href='https://www.facebook.com/' aria-label='See our facebook page'>
        <BsFacebook className='social-icon' />
      </a>
      <a href='https://www.instagram.com/' aria-label='See our instagram page'>
        <BsInstagram className='social-icon' />
      </a>
    </div>
  );
}

export default Footer;
