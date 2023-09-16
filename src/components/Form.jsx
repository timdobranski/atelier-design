import banner2 from '../assets/images/banner-2.jpg';
import '../index.css';

function Form() {
  return (
      <div className="column-both row-5">
        <h3 className="grid-full">Tell Us About You</h3>
        <p className="grid-full">Click below to tell us more about how we can serve your business</p>
        <button>Click Here</button>
        <img className="grid-full" src={banner2} alt="banner2" />
      </div>
  );
}

export default Form;
