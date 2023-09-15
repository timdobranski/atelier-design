import Welcome from './components/Welcome';
import Introduction from './components/Introduction';
import History from './components/History';
import Features from './components/Features';
import Form from './components/Form';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

import './index.css';

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <Welcome />
        <Introduction />
        <History />
        <Features />
        <Form />
        <Reviews />
        <Footer />
        {/* <img className="grid-full" src={banner1} alt="banner1" />
        <img className="grid-full" src={banner2} alt="banner2" /> */}
    </div>
    </div>
  );
}

export default App;
