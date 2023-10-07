import Modal from 'react-modal';
import earlyEarth from '../../assets/images/early-earth-2.jpg';
import './historyModal.mobile.css';
import './historyModal.css';
import '../../index.css';
import '../../index.mobile.css';

function HistoryModal({ isOpen, onRequestClose }) {
  return (
    <Modal isOpen={isOpen}
      onRequestClose={onRequestClose}
      className='modal'
      overlayClassName='modal-overlay'
    >
      <div className='modal-container'>
        <h4 className='section-titles modal-title'>OUR HISTORY</h4>
        <p className='modal-paragraph'>Over 4.5 billion years ago, when the Earth had only just began to settle and cool,
          Atelier had already built over two hundred websites. Our expert developers
          have been building websites since the dawn of time, and we're ready to help you build yours.
        </p>
        <div className='modal-content-container'>
          <div className='image-container'>
            <img className='early-earth' src={earlyEarth} alt="primordial early earth" />
            <p className='early-earth-caption'>*Actual photograph of the first Atelier offices</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default HistoryModal;
