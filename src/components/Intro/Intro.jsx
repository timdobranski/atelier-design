import img1 from '../../assets/images/img-1.jpg';
import Modal from 'react-modal';
import '../../index.css';
import './intro.css';
import { useState } from 'react';

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
            content: {
              position: 'absolute',
              top: '10vw',
              left: '40px',
              right: '40px',
              bottom: '40px',
              marginTop: '10vw',
              backgroundImage: `url('../../assets/images/early-earth.jpeg')`, // Correct the URL
              backgroundSize: 'cover', // Optional: Adjust background size
              backgroundRepeat: 'no-repeat', // Optional: Prevent image repetition
              color: 'white',
              // border: 'solid 8px var(--primary-dark-color)',
              width:'65vw',
              height: '25vw',
              textAlign: 'center',
              margin: '0 auto',
              zIndex: 3,
              padding: '20px'
            },
          }}

          >
         <div className='modal-container'>
           <h2>Our History</h2>
          <p>Over 13 billion years ago, when the Earth had only just began to settle and cool,
            Rooster Grin had already built over two hundred websites. Our expert developers
            have been building websites since the dawn of time, and we're ready to help you build yours.
          </p>
          </div>
        </Modal>
        <div className='intro-grid'>
          <div className="intro-left">
            <div className="textContentContainer">
              <h3 className='section-titles'>ABOUT US</h3>
              <p>
                At Rooster Grin Media, we believe that your business is our business.
                We excel at building solutions that are tailored to fit your needs
                and exceed your expectations. Our team of top-notch developers and designers
                will craft beautiful, responsive, and functional websites that will drive growth
                and improve visibility for your business. We are passionate about helping our
                clients achieve their goals and grow their brands.
              </p>
              <h5 onClick={handleModalOpen}>{'> Click Here To Learn More'}</h5>
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
