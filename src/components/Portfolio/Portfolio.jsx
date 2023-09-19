import banner2 from '../../assets/images/banner-2.jpg';
import fitnessPass from '../../assets/images/FitnessPass2.png';
import atelier from '../../assets/images/atelier2.png';
import stringSchool from '../../assets/LMSS.mov';

import '../../index.css';
import '../../index.mobile.css';
import './portfolio.css';
import './portfolio.mobile.css';

function Form() {
  return (
    <div className="row-5 portfolio-container">
      <img className="banner2" src={banner2} alt="banner2" />
      <div className='portfolio-content-container'>
        <h3 className="section-titles portfolio-title">PORTFOLIO</h3>
        <p className="portfolio-description-paragraph">{`Check out some of our best work below`}</p>
        <div className="gallery-container-grid">
          <img src={fitnessPass} className='gallery-photo-vertical' alt="mobile app to connect users with gym classes" />
          <video src={stringSchool} className='gallery-photo-vertical' controls></video>
          <img src={atelier} className='gallery-photo' alt="atelier retail clothing website" />
          <p className='portfolio-app-labels' >FitnessPass App</p>
          <p className='portfolio-app-labels'>String School App</p>
          <p className='portfolio-app-labels' >Atelier Apparel</p>
        </div>
      </div>
    </div>
  );
}

export default Form;
