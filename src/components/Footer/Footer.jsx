import { BsFacebook, BsInstagram } from 'react-icons/bs';
import '../../index.css';
import './footer.css';

function Footer() {
  return (
    <div className='footer-container centered'>
      <h5 className='followUs'> Follow Us: </h5>
      <BsInstagram className='social-icon' />
      <BsFacebook className='social-icon' />
    </div>
  );
}

export default Footer;
