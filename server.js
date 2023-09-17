const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const path = require('path');

// app.get('/api/hello', (req, res) => {
//   res.send({ message: 'Hello from server!' });
// });
app.use(express.static(path.join(__dirname, './build')));




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
