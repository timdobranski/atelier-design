import Welcome from './components/Welcome/Welcome';
import AboutUs from './components/AboutUs/AboutUs';
import SignUp from './components/SignUp/SignUp';
import Features from './components/Features/Features';
import Portfolio from './components/Portfolio/Portfolio';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <div className="App grid-container">
      <Welcome />
      <AboutUs />
      <SignUp />
      <Features />
      <Portfolio />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
