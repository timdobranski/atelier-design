const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const path = require('path');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const cors = require('cors');

app.use(express.static(path.join(__dirname, './build')));
app.use(bodyParser.json());
app.use(cors());


app.post('/send-email', async (req, res) => {

  const { recipientEmail } = req.body;
  console.log('recipient email:', recipientEmail);

  try {
    const msg = {
      to: recipientEmail,
      from: 'timdobranski@gmail.com',
      subject: 'Welcome to the Family!',
      text: 'We\'re glad to have you aboard! Stay tuned for more cool updates!'
    };

    await sgMail.send(msg);
    console.log('Email sent');
    res.sendStatus(200); // Send a success status back to the React app
  } catch (error) {
    console.error('Email sending failed:', JSON.stringify(error));
    res.status(500).send('Email sending failed'); // Send an error status back to the React app
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
