import banner2 from '../../assets/images/banner-2.jpg';
import fitnessPass from '../../assets/images/FitnessPass2.png';
import atelier from '../../assets/images/atelier2.png';
import stringSchool from '../../assets/LMSS.mov';

import '../../index.css';
import './portfolio.css';

function Form() {
  return (
    <div className="row-5">
      <img className="banner2" src={banner2} alt="banner2" />
      <div className='form-content-container'>
        <h3 className="section-titles no-lower-margin">PORTFOLIO</h3>
        <p className="grid-full">{`Explore our previous work below (my shameless plug)`}</p>
        <div className="gallery-container-grid">
          <video src={stringSchool} className='gallery-photo-vertical' controls></video>
          <img src={fitnessPass} className='gallery-photo-vertical' alt="mobile app to connect users with gym classes" />
          <img src={atelier} className='gallery-photo' alt="atelier retail clothing website" />
              <p>String School App</p>
        <p>FitnessPass App</p>
        <p>Atelier Apparel</p>
        </div>
      </div>
    </div>
  );
}

export default Form;
