import Welcome from './components/Welcome/Welcome';
import Introduction from './components/Intro/Intro';
import History from './components/History/History';
import Features from './components/Features/Features';
import Form from './components/Form/Form';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <div className="App grid-container">
      {/* <div className='grid-container'> */}
        <Welcome />
        <History />
        <Introduction />
        <Features />
        <Form />
        <Reviews />
        <Footer />
      </div>
    // </div>
  );
}

export default App;
