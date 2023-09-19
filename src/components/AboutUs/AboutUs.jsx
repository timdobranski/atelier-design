import { useState } from 'react';
import Modal from 'react-modal';
import img1 from '../../assets/images/img-1.jpg';
import earlyEarth from '../../assets/images/early-earth.jpeg';
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
          <h4 className='section-titles modal-title'>Our History</h4>
          <p className='modal-paragraph'>Over 13 billion years ago, when the Earth had only just began to settle and cool,
            Rooster Grin had already built over two hundred websites. Our expert developers
            have been building websites since the dawn of time, and we're ready to help you build yours.
          </p>
          <img className='early-earth' src={earlyEarth} alt="primordial early earth" />
        </div>
      </Modal>
      <div className='intro-grid'>
        <div className="intro-left">
          <div className="textContentContainer">
            <h4 className='section-titles'>ABOUT US</h4>
            <p>
              At Rooster Grin Media, we believe that your business is our business.
              We excel at building solutions that are tailored to fit your needs
              and exceed your expectations. Our team of top-notch developers and designers
              will craft beautiful, responsive, and functional websites that will drive growth
              and improve visibility for your business. We are passionate about helping our
              clients achieve their goals and grow their brands.
            </p>
            <p onClick={handleModalOpen} className='linked-text'>{'> Click Here To Learn More'}</p>
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
