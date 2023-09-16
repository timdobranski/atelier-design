import banner2 from '../../assets/images/banner-2.jpg';
import '../../index.css';
import './form.css';

function Form() {
  return (
    <div className="row-5">
      <img className="banner2" src={banner2} alt="banner2" />
      <div className='form-content-container'>
        <h3 className="grid-full">Tell Us About You</h3>
        <p className="grid-full">Click below to tell us more about how we can serve your business</p>
        <button className='yellowButton'>CLICK HERE</button>
      </div>
    </div>
  );
}

export default Form;
