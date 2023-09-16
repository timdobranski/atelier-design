import retention from '../assets/icons/home-retention.svg';
import hygeine from '../assets/icons/home-hygiene.svg';
import expertise from '../assets/icons/home-expertise.svg';
import lab from '../assets/icons/home-lab.svg';
import '../index.css';

function Features() {
  return (
      <div className="column-both row-4">
        <h3 className="grid-full">Unbeatable Quality</h3>
        <p className="grid-full">Click on each icon to learn more about the values we cherish that drive the best output in the business.</p>
        <img className="icon" src={expertise} alt="hero" />
        <img className="icon" src={hygeine} alt="hero" />
        <img className="icon" src={lab} alt="hero" />
        <img className="icon" src={retention} alt="hero" />
      </div>
  );
}

export default Features;
