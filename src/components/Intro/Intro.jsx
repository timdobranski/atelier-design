import img1 from '../../assets/images/img-1.jpg';
import '../../index.css';
import './intro.css';

function Introduction() {
  return (
      <div className="row-2">
        <div className='intro-grid'>
          <div className="intro-left">
            <div className="textContentContainer">
              <h3>About Us</h3>
              <p>
                At Rooster Grin Media, we believe that your business is our business.
                We excel at building solutions that are tailored to fit your needs
                and exceed your expectations. Our team of top-notch developers and designers
                will craft beautiful, responsive, and functional websites that will drive growth
                and improve visibility for your business. We are passionate about helping our
                clients achieve their goals and grow their brands.
              </p>
              <h5>{'> Click Here To Learn More'}</h5>
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
