import banner1 from '../assets/images/banner-1.jpg';
import '../index.css';

function History() {
  return (
      <div className="column-both row-3">
        <h3 className="grid-full">Join the Family</h3>
        <p>Sign Up for our monthly newsletter</p>
        <input type="text" placeholder="Enter your email" />
        <button className="grid-full">Sign Up</button>
        <img className="grid-full" src={banner1} alt="banner1" />
      </div>
  );
}

export default History;
