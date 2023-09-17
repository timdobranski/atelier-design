import banner1 from '../../assets/images/banner-1.jpg';
import axios from 'axios';
import '../../index.css';
import './history.css';
import { useState } from 'react';

function History() {
  const [email, setEmail] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log('inside handler')
    try {
      // Send a POST request to your server with the email in the body
      await axios.post('http://localhost:3000/send-email', {
        recipientEmail: email,
      });

      // Optionally, reset the email input field
      setEmail('');

      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
      <div className="row-3">
            <img className='banner1' src={banner1} alt="banner1" />
            <div className='content-container'>
              <h3 >Join the Family</h3>
              <p>Sign Up for our monthly newsletter</p>
              <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit" className="grid-full">
          Sign Up
        </button>
      </form>
            </div>
      </div>
  );
}

export default History;
