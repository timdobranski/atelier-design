import Welcome from './components/Welcome';
import Introduction from './components/Introduction';
import History from './components/History';
import Features from './components/Features';
import Form from './components/Form';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

import hero from './assets/images/hero.jpg';
import banner1 from './assets/images/banner-1.jpg';
import banner2 from './assets/images/banner-2.jpg';
import image1 from './assets/images/img-1.jpg';

import './index.css';

function App() {
  return (
    <div className="App">
      <div className='grid-container'>
        <Welcome />
        <Introduction />
        <History />
        {/* <Features /> */}
        {/* <Form /> */}
        {/* <Reviews /> */}
      {/* <Footer /> */}

        </div>
    </div>
  );
}

export default App;
