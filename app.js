const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to DB
mongoose.connect(config.database);

// On connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database);
});

// On error
mongoose.connection.on('error', (err) => {
  console.log('Database error ' + err);
});

app = express();
const main = require('./routes/main');

// Port number
const port = 3000;

// CORS middleware
app.use(cors());

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.json());

app.use('/', main);

// Index route
app.get('/', (req, res) => {
  res.send("ok");
});

// Start server
app.listen(port, () => {
  console.log("Server started on prot " + port);
});
