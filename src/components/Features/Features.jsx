import { useState } from 'react';
import retention from '../../assets/icons/home-retention.svg';
import hygeine from '../../assets/icons/home-hygiene.svg';
import expertise from '../../assets/icons/home-expertise.svg';
import lab from '../../assets/icons/home-lab.svg';
import paragraphs from '../../assets/featureParagraphs';
import '../../index.css';
import './features.css';

function Features() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div className="row-4">
      <div className="features-grid">
        <div className="features-left">
          <div className='features-content-container'>
            <h3 className='section-titles'>OUR VALUES</h3>
            <p>Hover over each icon to learn more about our process that drives the best output in the business.</p>
            <div className='features-paragraph-container'>
              {hoveredIcon && <p className='feature-paragraph'>{paragraphs[hoveredIcon]}</p>}
            </div>
          </div>
        </div>
        <div className="features-right">
          <div className='features-icons-grid'>
              <div className='icon'
                onMouseEnter={() => setHoveredIcon('QUALITY')}
                onMouseLeave={() => setHoveredIcon(null)}>
                <img src={expertise} alt="quality" />
              <h3 className='feature-titles'>QUALITY</h3>
            </div>
            <div className='icon'
              onMouseEnter={() => setHoveredIcon('HYGEINE')}
              onMouseLeave={() => setHoveredIcon(null)}>
              <img src={hygeine} alt="hygeine" />
              <h3 className='feature-titles'>HYGEINE</h3>
            </div>
            <div className='icon'
            onMouseEnter={() => setHoveredIcon('SCIENCE')}
              onMouseLeave={() => setHoveredIcon(null)}>
              <img src={lab} alt="science" />
              <h3 className='feature-titles'>SCIENCE</h3>
            </div>
            <div className='icon'
              onMouseEnter={() => setHoveredIcon('SPEED')}
              onMouseLeave={() => setHoveredIcon(null)}>
              <img src={retention} alt="speed" />
              <h3 className='feature-titles'>SPEED</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
