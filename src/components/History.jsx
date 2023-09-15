import banner1 from '../assets/images/banner-1.jpg';
import '../index.css';

function History() {
  return (
      <div className="column-both row-3">
        <h1 className="grid-full">Another Header</h1>
        <h2 className="grid-full">Words, words, words</h2>
        <img className="grid-full" src={banner1} alt="banner1" />
      </div>
  );
}

export default History;
