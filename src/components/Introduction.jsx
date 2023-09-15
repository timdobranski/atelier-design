import img1 from '../assets/images/img-1.jpg';
import '../index.css';

function Introduction() {
  return (
      <div className="column-both row-2">
        <div className="column-left row-2">
          <h1 className="grid-full">Header</h1>
          <p>Lots of important words</p>
        </div>
        <div className="column-right row-2">
          <img className="grid-full" src={img1} alt="img1" />
        </div>
      </div>
  );
}

export default Introduction;
