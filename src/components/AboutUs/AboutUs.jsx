import { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineRight } from 'react-icons/ai';
import img1 from '../../assets/images/img-1.jpg';
import earlyEarth from '../../assets/images/early-earth-2.jpg';
import '../../index.css';
import '../../index.mobile.css';
import './aboutUs.css';
import './aboutUs.mobile.css';

function Introduction() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };
  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="row-2">
      <Modal isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        className='modal'
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 2
          },
        }}
      >
        <div className='modal-container'>
          <h4 className='section-titles modal-title'>OUR HISTORY</h4>
          <div className='modal-content-container'>
            <p className='modal-paragraph'>Over 4.5 billion years ago, when the Earth had only just began to settle and cool,
              Rooster Grin had already built over two hundred websites. Our expert developers
              have been building websites since the dawn of time, and we're ready to help you build yours.
            </p>
            <img className='early-earth' src={earlyEarth} alt="primordial early earth" />
            <p className='early-earth-caption'>*Actual photograph of the first Rooster Grin offices</p>
          </div>
        </div>
      </Modal>
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

export default Introduction;
