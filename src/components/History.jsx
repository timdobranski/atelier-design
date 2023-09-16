import banner1 from '../assets/images/banner-1.jpg';
import '../index.css';
import './history.css';

function History() {
  return (
      <div className="row-3">
            <img className='banner1' src={banner1} alt="banner1" />
            <div className='content-container'>
              <h3 >Join the Family</h3>
              <p>Sign Up for our monthly newsletter</p>
              <input type="text" placeholder="Enter your email" />
              <button className="grid-full">Sign Up</button>
            </div>
      </div>
  );
}

export default History;
