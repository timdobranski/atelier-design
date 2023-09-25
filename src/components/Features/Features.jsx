import { useState } from 'react';
import retention from '../../assets/icons/home-retention.svg';
import hygeine from '../../assets/icons/home-hygiene.svg';
import expertise from '../../assets/icons/home-expertise.svg';
import lab from '../../assets/icons/home-lab.svg';
import paragraphs from '../../assets/featureParagraphs';
import '../../index.css';
import '../../index.mobile.css';
import './features.css';
import './features.mobile.css';

function Features() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const iconsData = [
    { id: 'QUALITY', src: expertise, alt: 'quality', title: 'QUALITY' },
    { id: 'HYGEINE', src: hygeine, alt: 'hygeine', title: 'HYGEINE' },
    { id: 'SCIENCE', src: lab, alt: 'science', title: 'SCIENCE' },
    { id: 'SPEED', src: retention, alt: 'speed', title: 'SPEED' }
  ];

  return (
    <div className="row-4 features-grid">
      <div className="features-left">
        <div className='features-content-container'>
          <h3 className='section-titles'>OUR VALUES</h3>
          <p>Hover over each icon below to learn more about our process that drives the best output in the business.</p>
          {hoveredIcon && <p className='feature-paragraph slide-in-left'>{paragraphs[hoveredIcon]}</p>}
        </div>
      </div>

      <div className="features-right">
        <div className='features-icons-grid'>
          {iconsData.map(icon => (
            <div key={icon.id} className='ring-container'>
              <div className='ring'>
                <div className={`icon ${icon.id === 'QUALITY' ? 'icon-offset' : ''}`}
                  onMouseEnter={() => setHoveredIcon(icon.id)}
                  onMouseLeave={() => setHoveredIcon(null)}>
                  <img src={icon.src} alt={icon.alt} />
                </div>
              </div>
              <h3 className='feature-titles'>{icon.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
