import hero from './assets/images/hero.jpg';
import banner1 from './assets/images/banner-1.jpg';
import banner2 from './assets/images/banner-2.jpg';
import img1 from './assets/images/img-1.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
    <img src={hero} alt="hero" />
    <img src={img1} alt="img1" />
    <img src={banner1} alt="banner1" />
    <img src={banner2} alt="banner2" />

    </div>
  );
}

export default App;
