import retention from '../../assets/icons/home-retention.svg';
import hygeine from '../../assets/icons/home-hygiene.svg';
import expertise from '../../assets/icons/home-expertise.svg';
import lab from '../../assets/icons/home-lab.svg';
import '../../index.css';
import './features.css';

function Features() {
  return (
      <div className="row-4">
        <div className="features-grid">
          <div className="features-left">
            <div className='features-content-container'>
              <h3 >Unbeatable Quality</h3>
              <p>Click on each icon to learn more about the values we cherish that drive the best output in the business.</p>
            </div>
          </div>
          <div className="features-right">
            <div className='features-icons-grid'>
              <div className='icon'>
                <img src={expertise} alt="hero" />
                <h3>EXPERTISE</h3>
              </div>
              <div className='icon'>
                <img src={hygeine} alt="hero" />
                <h3>HYGEINE</h3>
              </div>
              <div className='icon'>
                <img src={lab} alt="hero" />
                <h3>SCIENCE</h3>
              </div>
              <div className='icon'>
                <img src={retention} alt="hero" />
                <h3>TIMELINESS</h3>
              </div>


              {/* <img className="icon" src={hygeine} alt="hero" />
              <img className="icon" src={lab} alt="hero" />
              <img className="icon" src={retention} alt="hero" /> */}
            </div>
          </div>
        </div>
      </div>
  );
}

export default Features;
