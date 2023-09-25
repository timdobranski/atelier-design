import banner1 from '../../assets/images/banner-1.jpg';
import axios from 'axios';
import '../../index.css';
import '../../index.mobile.css';
import './signUp.css';
import './signUp.mobile.css';
import { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState({
    show: false,
    message: '',
  });
  const [fading, setFading] = useState(false);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/send-email', {
        recipientEmail: email,
      });
      setEmail('');
      setNotification({
        show: true,
        message: 'Signup successful. Check your email for a confirmation message.',
      });
      setTimeout(() => {
        setFading(true);
        setTimeout(() => {
          setNotification({ show: false, message: '' });
          setFading(false);
        }, 3000); // wait another 3 seconds before actually removing the element
      }, 3000); // show the notification for 3 seconds, then start fading
    } catch (error) {
      console.error('Error sending email:', error);
      setEmail('');
      setNotification({
        show: true,
        message: 'Signup failed. Please check that the address is valid and try again.',
      });
      setTimeout(() => {
        setFading(true);
        setTimeout(() => {
          setNotification({ show: false, message: '' });
          setFading(false);
        }, 3000); // wait another 3 seconds before actually removing the element
      }, 3000); // show the notification for 3 seconds, then start fading
    }
  };

  return (
    <div className="row-3">
      <div className='content-container'>
        <h3 className='section-titles'>SIGN UP</h3>
        <p>Enter your email below to sign up for our newsletter</p>
        <p className='comment'>{'(sends confirmation email to address provided)'}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className="email-input radius"
          />
          <button type="submit" className="signUpButton radius">
            SIGN UP
          </button>
        </form>
      </div>
      <img className='banner1' src={banner1} alt="banner1" />
      {notification.show && (
        <div
          className={`notification ${fading ? 'fade-out' : ''}`}
        >
          {notification.message}
        </div>
      )}
    </div>
  );
}

export default SignUp;
