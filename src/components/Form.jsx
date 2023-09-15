import banner2 from '../assets/images/banner-2.jpg';
import '../index.css';

function Form() {
  return (
      <div className="column-both row-5">
        <h1 className="grid-full">Form Header</h1>
        <h2 className="grid-full">Click Here to Form</h2>
        <img className="grid-full" src={banner2} alt="banner2" />
      </div>
  );
}

export default Form;
