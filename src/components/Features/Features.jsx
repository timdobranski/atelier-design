import retention from '../../assets/icons/home-retention.svg';
import hygeine from '../../assets/icons/home-hygiene.svg';
import expertise from '../../assets/icons/home-expertise.svg';
import lab from '../../assets/icons/home-lab.svg';
import '../../index.css';
import './features.css';
import { useState } from 'react';

function Features() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const paragraphs = {
    QUALITY: `At Rooster Grin, we source only the finest, artisanal pixels for our websites. Each byte is hand-picked, aged to perfection, and carefully assembled by our team of master web-carpenters. Trust us, our HTML nails are so strong, not even a virtual earthquake could shake your website\'s foundation!`,
    HYGEINE: `All Rooster Grin websites are built in state-of-the-art labs and overseen by NASA scientist doctors. Our developers don full hazmat suits to ensure not a single bug contaminates your site. We even give each line of code a thorough scrubbing with organic, gluten-free sanitizer, so your website is served up 100% germ-free!`,
    SCIENCE: `At our lab—uh, I mean, office—we've cracked the atomic structure of the perfect website. Using the Large Hadron Collider of coding, we collide CSS molecules and JavaScript atoms at near-light speeds to create websites with unparalleled stability. It's not just web development; it's particle physics! Every webpage we build is like a stable isotope, except instead of decaying over time, it just keeps getting better!`,
    SPEED: `Our developers are so fast, they finish coding before their coffee gets cold! They're like coding ninjas, swooping in and deploying websites faster than you can say "JavaScript." We've got a production line so streamlined, even our algorithms have algorithms!"`
  };

  return (
      <div className="row-4">
        <div className="features-grid">
          <div className="features-left">
            <div className='features-content-container'>
              <h3 >Unbeatable Quality!</h3>
              <p>Hover over each icon to learn more about our process that drives the best output in the business.</p>
              {hoveredIcon && <p className='feature-paragraph'>{paragraphs[hoveredIcon]}</p>}
            </div>
          </div>
          <div className="features-right">
            <div className='features-icons-grid'>
              <div className='icon'
                onMouseEnter={() => setHoveredIcon('QUALITY')}
                onMouseLeave={() => setHoveredIcon(null)}>
                <img src={expertise} alt="quality" />
                <h3>QUALITY</h3>
              </div>
              <div className='icon'
                onMouseEnter={() => setHoveredIcon('HYGEINE')}
                onMouseLeave={() => setHoveredIcon(null)}>
                <img src={hygeine} alt="hygeine" />
                <h3>HYGEINE</h3>
              </div>
              <div className='icon'
              onMouseEnter={() => setHoveredIcon('SCIENCE')}
                onMouseLeave={() => setHoveredIcon(null)}>
                <img src={lab} alt="science" />
                <h3>SCIENCE</h3>
              </div>
              <div className='icon'
                onMouseEnter={() => setHoveredIcon('SPEED')}
                onMouseLeave={() => setHoveredIcon(null)}>
                <img src={retention} alt="speed" />
                <h3>SPEED</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Features;
