import Welcome from './components/Welcome/Welcome';
import AboutUs from './components/AboutUs/AboutUs';
import SignUp from './components/SignUp/SignUp';
import Features from './components/Features/Features';
import Portfolio from './components/Portfolio/Portfolio';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';
import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRest(true);
    }, 1000); // Delay of 2 seconds, adjust as needed

    return () => clearTimeout(timer); // Cleanup the timeout in case of component unmounting
  }, []);

  return (
    <div className="App grid-container">
      <Welcome />
      {showRest && (
        <>
          <AboutUs />
          <SignUp />
          <Features />
          <Portfolio />
          <Reviews />
          <Footer />
        </>
      )}
    </div>
  );
}
// By using the above approach, initially only the Welcome component will be rendered. After the delay (2 seconds in this case), the rest of the components (AboutUs, SignUp, etc.) will render. Adjust the timeout duration based on the exact delay you want.







export default App;
