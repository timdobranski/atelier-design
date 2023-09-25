import { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import img1 from '../../assets/images/img-1.jpg';
import HistoryModal from '../HistoryModal/HistoryModal';
import '../../index.css';
import '../../index.mobile.css';
import './aboutUs.css';
import './aboutUs.mobile.css';

function AboutUs() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };
  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="row-2">
      <HistoryModal isOpen={modalIsOpen} onRequestClose={handleModalClose} />
      <div className='intro-grid'>
        <div className="intro-left">
          <div className="text-content-container">
            <h4 className='section-titles'>ABOUT US</h4>
            <p>
              At Rooster Grin Media, we believe that your business is our business.
              We excel at building solutions that are tailored to fit your needs
              and exceed your expectations. Our team of top-notch developers and designers
              will craft beautiful, responsive, and functional websites that will drive growth
              and improve visibility for your business. We are passionate about helping our
              clients achieve their goals and grow their brands.
            </p>
            <div onClick={handleModalOpen}>
              <AiOutlineRight className='linked-text arrow-right-icon'/>
              <p className='linked-text'>{'Click Here To Learn More'}</p>
            </div>
          </div>
        </div>
        <div className="intro-right">
          <img className='right-side-image' src={img1} alt="img1" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
