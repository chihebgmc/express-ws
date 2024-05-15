// Dependencies
const express = require('express');
const dotenv = require('dotenv');
const path = require('node:path');

// Config
dotenv.config();
const publicDir = path.join(__dirname, 'public');

// Initialize application
const app = express();

// Define authorize middleware
const authorize = (req, res, next) => {
  const isAuth = true;
  if (isAuth) {
    next();
  } else {
    res.status(401).send('401 Not Authorized');
  }
};

// app.get('/', (req, res) => {
//   //   res.send('<h1>Home Page</h1>');
//   res.sendFile(publicDir + '/', err => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('500 Server error');
//     } else {
//       console.log('Succeeded');
//     }
//   });
// });

// app.get('/about', (req, res) => {
//   res.sendFile(publicDir + '/about.html', err => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('500 Server error');
//     } else {
//       console.log('Succeeded');
//     }
//   });
// });

// app.get('/contact', (req, res) => {
//   res.sendFile(publicDir + '/contact.html', err => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('500 Server error');
//     } else {
//       console.log('Succeeded');
//     }
//   });
// });

// app.get('/dashboard', authorize, (req, res) => {
//   res.sendFile(publicDir + '/dashboard.html', err => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('500 Server error');
//     } else {
//       console.log('Succeeded');
//     }
//   });
// });
app.use(authorize);
app.use(express.static(publicDir));

// Define port
const port = process.env.PORT || 5000;

// Listen to the port
app.listen(port, () => console.log(`Server is running on port ${port}`));
